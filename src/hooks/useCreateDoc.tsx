/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {addDoc, collection, Firestore, Timestamp} from "firebase/firestore"

import {useMutation, UseMutationResult, useQueryClient} from "@tanstack/react-query"
import {Doc} from "../interfaces/Doc"
import {UseCreateDocParams} from "../interfaces/UseCreateDocParams"
import {useEffect} from "react"

/**
 * 제품 생성을 위한 커스텀 훅
 * @param params {UseCreateDocParams<T>} - 컬렉션 이름과 콜백 함수
 * @param firestore {Firestore} - Firestore 인스턴스
 * @returns {UseMutationResult<Doc<T>, Error, T>} - 제품 생성 mutation 결과
 * @throws {Error} - Firestore가 초기화되지 않았을 경우 에러
 * @example
 * const { mutate } = useCreateDoc({ name: CollectionNames.PRODUCT, callback: (doc) => { console.log(doc) } })
 * mutate({ name: 'Product 1', price: 1000, stock: 10 })
 */
export function useCreateDoc<T>(params: UseCreateDocParams<T>, firestore: Firestore): UseMutationResult<Doc<T>, Error, T> {
  const queryClient = useQueryClient()

  // 쿼리 활성 여부 확인
  useEffect(() => {
    if (params.enabled === false) return;
  }, [params.enabled]);

  return useMutation<Doc<T>, Error, T>({
    mutationFn: async (input: T) => {
      if (!firestore) throw new Error('Firestore is not initialized')
      const now = Timestamp.now()
      const docData = {
        ...input,
        createdAt: now,
        updatedAt: now,
        deletedAt: null
      }
      const docRef = await addDoc(collection(firestore, params.name), docData)

      return { ...docData, id: docRef.id } as Doc<T>
    },
    onSuccess: (doc: Doc<T>) => {
      queryClient.invalidateQueries({ queryKey: [params.name] })
      params.callback?.(doc)
    }
  })
}
