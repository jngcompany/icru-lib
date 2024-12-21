/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {
  collection,
  Firestore,
  getCountFromServer,
  getDocs,
  limit,
  query,
  startAfter,
  where,
  WhereFilterOp,
  Query,
  DocumentData,
} from "firebase/firestore"
import {useCallback, useEffect, useState} from "react"
import {Doc} from "../interfaces"
import {UseListQueryParams, UseListQueryResult} from "../interfaces"

/**
 * Firestore 쿼리 참조를 생성하는 내부 유틸리티 함수
 * @internal
 * @param firestore - Firestore 인스턴스
 * @param params - 쿼리 파라미터
 * @param page - 현재 페이지 번호
 * @param lastVisible - 마지막으로 로드된 문서 (페이지네이션용)
 * @returns Firestore 쿼리 객체
 */
const createQueryRef = (
  firestore: Firestore,
  params: UseListQueryParams,
  page: number,
  lastVisible: DocumentData | null
): Query => {
  const collectionRef = collection(firestore, params.name)
  const baseQuery = query(collectionRef, limit(params.size))
  const whereConditions = [
    ...(params.where?.map(({ field, operator, value }) => 
      where(field, operator as WhereFilterOp, value)) || []),
    ...(params.deleted !== undefined 
      ? [where('deletedAt', params.deleted ? '!=' : '==', null)]
      : [])
  ]

  if (whereConditions.length === 0) {
    return page === 0 ? baseQuery : query(baseQuery, startAfter(lastVisible))
  }

  return page === 0
    ? query(baseQuery, ...whereConditions)
    : query(baseQuery, startAfter(lastVisible), ...whereConditions)
}

/**
 * Firestore 문서 데이터를 필터링하는 내부 유틸리티 함수
 * @internal
 * @template T - 문서 타입
 * @param doc - Firestore 문서 데이터
 * @param fields - 필터링할 필드 목록
 * @returns 필터링된 문서 데이터
 */
const filterDocumentData = <T extends Doc<T>>(
  doc: DocumentData,
  fields?: string[]
): T => {
  const data = doc.data()
  const filteredData = { id: doc.id } as Record<string, unknown>

  if (fields) {
    fields.forEach(field => {
      if (data[field] !== undefined) {
        filteredData[field] = data[field]
      }
    })
  } else {
    Object.assign(filteredData, data)
  }

  return filteredData as T
}

/**
 * Firestore 컬렉션에서 페이지네이션된 데이터를 조회하는 React 훅
 * 
 * @template T - 문서 타입 (Doc 인터페이스를 확장해야 함)
 * @param params - 쿼리 파라미터
 * @param firestore - Firestore 인스턴스
 * 
 * @returns UseListQueryResult 객체
 * - items: 현재 페이지의 문서 목록
 * - page: 현재 페이지 번호
 * - pages: 전체 페이지 수
 * - total: 전체 문서 수
 * - error: 에러 객체 (있는 경우)
 * - fetch: 데이터를 다시 불러오는 함수
 * 
 * @example
 * ```typescript
 * // 사용자 인터페이스 정의
 * interface User extends Doc<User> {
 *   name: string;
 *   email: string;
 *   status: 'active' | 'inactive';
 * }
 * 
 * // 훅 사용 예시
 * function UserList() {
 *   const { items, page, pages, total, error, fetch } = useListQuery<User>({
 *     name: 'users',
 *     size: 10,
 *     fields: ['name', 'email', 'status'],
 *     where: [
 *       { field: 'status', operator: '==', value: 'active' }
 *     ],
 *     deleted: false,
 *     enabled: true
 *   }, firestore);
 * 
 *   // 에러 처리
 *   if (error) {
 *     return <div>Error: {error.message}</div>;
 *   }
 * 
 *   // 데이터 렌더링
 *   return (
 *     <div>
 *       <h2>Users ({total})</h2>
 *       <ul>
 *         {items.map(user => (
 *           <li key={user.id}>{user.name} - {user.email}</li>
 *         ))}
 *       </ul>
 *       <div>
 *         Page {page + 1} of {pages}
 *         <button onClick={() => fetch({ page: page - 1 })} disabled={page === 0}>
 *           Previous
 *         </button>
 *         <button onClick={() => fetch({ page: page + 1 })} disabled={page >= pages - 1}>
 *           Next
 *         </button>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export function useListQuery<T extends Doc<T>>(
  params: UseListQueryParams,
  firestore: Firestore
): UseListQueryResult<T> {
  const [state, setState] = useState<{
    items: T[]
    page: number
    pages: number
    total: number
    error: Error | null
    lastVisible: DocumentData | null
  }>({
    items: [],
    page: 0,
    pages: 0,
    total: 0,
    error: null,
    lastVisible: null
  })

  const fetch = useCallback(
    async ({ page }: { page: number }) => {
      if (!firestore) return

      try {
        const queryRef = createQueryRef(firestore, params, page, state.lastVisible)
        const [snapshot, countSnapshot] = await Promise.all([
          getDocs(queryRef),
          getCountFromServer(collection(firestore, params.name))
        ])

        if (snapshot.empty) {
          setState(prev => ({ ...prev, items: [], error: null }))
          console.log('No more documents to load')
          return
        }

        const docs = snapshot.docs.map(doc => filterDocumentData<T>(doc, params.fields))
        const totalCount = countSnapshot.data().count

        setState({
          items: docs,
          page,
          pages: Math.ceil(totalCount / params.size),
          total: totalCount,
          error: null,
          lastVisible: snapshot.docs[snapshot.docs.length - 1]
        })
      } catch (err) {
        console.error('Error fetching list:', err)
        setState(prev => ({
          ...prev,
          error: err instanceof Error ? err : new Error('Unknown error occurred')
        }))
      }
    },
    [firestore, params, state.lastVisible]
  )

  useEffect(() => {
    if (params.enabled === false) return
    fetch({ page: state.page })
  }, [state.page, params.enabled, fetch])

  return {
    items: state.items,
    page: state.page,
    pages: state.pages,
    total: state.total,
    error: state.error,
    fetch
  }
}
