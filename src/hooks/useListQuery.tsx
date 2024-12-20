import { collection, getCountFromServer, getDocs, limit, query, startAfter, where, WhereFilterOp } from "firebase/firestore"
import { Firestore } from "firebase/firestore"
import { useCallback, useEffect } from "react"
import { useState } from "react"
import { Doc } from "src/interfaces"
import { UseListQueryParams } from "src/interfaces/UseListQueryParams"
import { UseListQueryResult } from "src/interfaces/UseListQueryResult"

/**
 * 리스트 쿼리 훅
 * @template T 리스트 아이템의 타입
 * @param {Object} params - 리스트 쿼리 파라미터
 * @param {string} params.name - 컬렉션 이름
 * @param {number} params.size - 페이지 크기
 * @param {string[]} params.fields - 필드 목록
 * @returns {UseListQueryResult<T>} 리스트 쿼리 결과
 */
export default function useListQuery<T extends Doc<T>>(params: UseListQueryParams, firestore: Firestore): UseListQueryResult<T> {
  // 리스트 아이템 배열
  const [items, setItems] = useState<T[]>([])
  // 현재 페이지 번호
  const [page, setPage] = useState(0)
  // 전체 페이지 수
  const [pages, setPages] = useState(0)
  // 전체 아이템 수
  const [total, setTotal] = useState(0)
  // 에러 상태
  const [error, setError] = useState<Error | null>(null)
  // 마지막으로 불러온 문서 (페이지네이션용)
  const [lastVisible, setLastVisible] = useState<any>(null)

  /**
   * 페이지별 데이터를 가져오는 콜백 함수
   * @param {Object} params - 페이지 파라미터
   * @param {number} params.page - 현재 페이지 번호
   */
  const fetch = useCallback(
    async ({ page }: { page: number }) => {
      if (!firestore) return
      try {
        // Firestore 쿼리 참조 가져오기
        const queryRef = getQueryRef(firestore)

        // 쿼리 실행하여 스냅샷 가져오기
        const snapshot = await getDocs(queryRef)

        // 문서 데이터 매핑
        const docs = snapshot.docs.map(doc => {
          const data = doc.data()
          const filteredData: any = { id: doc.id }

          // 지정된 필드만 필터링하여 데이터 추출
          if (params.fields) {
            params.fields.forEach(field => {
              if (data[field] !== undefined) {
                filteredData[field] = data[field]
              }
            })
          }
          return filteredData as T
        })

        // 전체 문서 수 가져오기
        const countSnapshot = await getCountFromServer(collection(firestore, params.name))
        const totalCount = countSnapshot.data().count

        // 전체 개수와 페이지 수 설정
        setTotal(totalCount)
        // 현재 페이지 번호 설정
        setPage(page)
        // 전체 페이지 수 설정
        setPages(Math.ceil(totalCount / params.size))

        // 마지막으로 불러온 문서와 결과 데이터 설정
        setLastVisible(snapshot.docs[snapshot.docs.length - 1])
        setItems(docs)
      } catch (err) {
        // 에러 처리
        setError(err as Error)
        console.error('Error fetching list:', err)
      } finally {
      }
    },
    [page, params.name, params.size, params.fields, lastVisible]
  )

  useEffect(() => {
    if (params.enabled === false) return
    fetch({ page })
  }, [page, params.enabled, fetch])

  /**
   * Firestore 쿼리 참조를 생성하는 함수
   * @param {Firestore} firestore - Firestore 인스턴스
   * @returns {Query} Firestore 쿼리 참조
   */
  const getQueryRef = (firestore: Firestore) => {
    // 기본 쿼리: 컬렉션과 페이지 크기 제한 설정
    const baseQuery = query(collection(firestore, params.name), limit(params.size))

    // where 조건들을 배열로 변환
    let whereConditions =
      params.where?.map(({ field, operator, value }) => where(field, operator as WhereFilterOp, value)) || []

    // 삭제된 문서 필터링을 위한 deletedAt 조건 추가
    if (params.deleted !== undefined) {
      whereConditions.push(where('deletedAt', params.deleted ? '!=' : '==', null))
    }

    // where 조건이 있는 경우
    if (whereConditions.length) {
      if (page === 0) {
        // 첫 페이지: 기본 쿼리 + where 조건
        return query(baseQuery, ...whereConditions)
      }
      // 다음 페이지: 기본 쿼리 + 마지막 문서 이후부터 + where 조건
      return query(baseQuery, startAfter(lastVisible), ...whereConditions)
    }

    // where 조건이 없는 경우
    if (page === 0) {
      // 첫 페이지: 기본 쿼리만
      return baseQuery
    }
    // 다음 페이지: 기본 쿼리 + 마지막 문서 이후부터
    return query(baseQuery, startAfter(lastVisible))
  }

  return {
    items,
    page,
    pages,
    total,
    error,
    fetch
  }
}
