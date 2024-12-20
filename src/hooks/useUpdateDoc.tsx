/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {UseUpdateDocParams} from "../interfaces/UseUpdateDocParams"
import {useMutation, UseMutationResult, useQueryClient} from "@tanstack/react-query"
import {Doc} from "../interfaces/Doc"
import {doc, Firestore, Timestamp, updateDoc} from "firebase/firestore"
import {useEffect} from "react"

/**
 * 문서 업데이트 훅
 * @template T 문서 데이터 타입
 * @param params 문서 업데이트 파라미터
 * @param firestore Firestore 인스턴스
 * @returns {UseMutationResult<Doc<T>, Error, Doc<T>>} 문서 업데이트 mutation 결과
 * @example
 * const { mutate } = useUpdateDoc({ name: Collections.USERS })
 * mutate({ id: '123', name: 'John Doe' })
 */
export function useUpdateDoc<T>(params: UseUpdateDocParams, firestore: Firestore): UseMutationResult<Doc<T>, Error, Doc<T>> {
  const queryClient = useQueryClient()

  // 쿼리 활성 여부 확인
  useEffect(() => {
    if (params.enabled === false) return;
  }, [params.enabled]);

  return useMutation<Doc<T>, Error, Doc<T>>({
    mutationFn: async (input: Doc<T>) => {
      if (!firestore) throw new Error('Firestore is not initialized')
      await updateDoc(doc(firestore, params.name, input.id), {
        ...input,
        updatedAt: Timestamp.now()
      })
      return { ...input, updatedAt: Timestamp.now() } as Doc<T>
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [params.name] })
    }
  })
}
