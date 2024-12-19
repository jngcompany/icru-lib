import { UseQueryResult } from '@tanstack/react-query'

import { Doc } from '@/domain/Doc'
import { useQuery } from '@tanstack/react-query'
import { doc } from 'firebase/firestore'

import { getDoc } from 'firebase/firestore'
import {Collections} from "@/enums/Collections";
import { Firestore } from 'firebase/firestore';



/**
 * 문서 조회에 필요한 입력 타입
 */
export interface UseDocParams {
  /** 컬렉션 이름 */
  name: Collections
  /** 문서 ID */
  id: string
}

/**
 * 단일 문서 조회를 위한 커스텀 훅
 *
 * @param params - 컬렉션 이름과 문서 ID를 포함한 파라미터
 * @param firestore
 * @returns UseQueryResult - 문서 조회 쿼리 결과
 */
export default function useDoc<T>(params: UseDocParams, firestore: Firestore): UseQueryResult<Doc<T>, Error> {
  return useQuery<Doc<T>, Error>({
    queryKey: [params.name, params.id],
    /**
     * 문서를 조회하는 함수
     *
     * @returns 조회된 문서 데이터
     * @throws Firestore가 초기화되지 않았거나 문서가 존재하지 않는 경우 에러
     */
    queryFn: async () => {
      const docRef = doc(firestore, params.name, params.id)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        throw new Error('Document does not exist')
      }
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Doc<T>
    },
    enabled: !!params.id,
    staleTime: 0,
    refetchInterval: 1000
  })
}
