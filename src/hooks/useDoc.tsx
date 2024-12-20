/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {useQuery, UseQueryResult} from '@tanstack/react-query'

import {Doc} from '../interfaces/Doc'
import {doc, Firestore, getDoc} from 'firebase/firestore'
import {UseDocParams} from '../interfaces/UseDocParams'
import {useEffect} from 'react'


/**
 * 단일 문서 조회를 위한 커스텀 훅
 *
 * @param params - 컬렉션 이름과 문서 ID를 포함한 파라미터
 * @param firestore - Firestore 인스턴스
 * @returns UseQueryResult - 문서 조회 쿼리 결과
 */
export function useDoc<T>(params: UseDocParams, firestore: Firestore): UseQueryResult<Doc<T> | null, Error> {
  // 쿼리 활성 여부 확인
  useEffect(() => {
    if (params.enabled === false) return;
  }, [params.enabled]);

  return useQuery<Doc<T> | null, Error>({
    queryKey: [params.name, params.id],
    queryFn: async () => {
      const docRef = doc(firestore, params.name, params.id)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        return null
      }
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Doc<T>
    },
    enabled: !!params.id,
    retry: 0,
  })
}
