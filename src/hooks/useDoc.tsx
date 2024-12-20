/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { UseQueryResult } from '@tanstack/react-query'

import { Doc } from '../interfaces/Doc'
import { useQuery } from '@tanstack/react-query'
import { doc } from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'
import { Firestore } from 'firebase/firestore';
import { UseDocParams } from 'src/interfaces/UseDocParams'



/**
 * 단일 문서 조회를 위한 커스텀 훅
 *
 * @param params - 컬렉션 이름과 문서 ID를 포함한 파라미터
 * @param firestore - Firestore 인스턴스
 * @returns UseQueryResult - 문서 조회 쿼리 결과
 */
export function useDoc<T>(params: UseDocParams, firestore: Firestore): UseQueryResult<Doc<T>, Error> {
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
