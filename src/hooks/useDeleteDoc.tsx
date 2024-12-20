import {  doc, Firestore, Timestamp, updateDoc } from "firebase/firestore"

import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import { Doc } from "src/interfaces/Doc"
import { UseDeleteDocParams } from "src/interfaces/UseDeleteDocParams"
import { useEffect } from "react"

/**
 * 문서 삭제를 위한 커스텀 훅
 * @param params {UseDeleteDocParams} - 컬렉션 이름을 포함한 파라미터
 * @param firestore {Firestore} - Firestore 인스턴스
 * @returns {UseMutationResult<Doc<T>, Error, string>} - 문서 삭제 mutation 결과
 * @throws {Error} - Firestore가 초기화되지 않았을 경우 에러
 * @example
 * const { mutate } = useDeleteDoc({ name: CollectionNames.PRODUCT })
 * mutate('productId')
 */
export function useDeleteDoc<T>(params: UseDeleteDocParams, firestore: Firestore): UseMutationResult<Doc<T>, Error, string> {
  const queryClient = useQueryClient()

  // 쿼리 활성 여부 확인
  useEffect(() => {
    if (params.enabled === false) return;
  }, [params.enabled]);

  return useMutation<Doc<T>, Error, string>({
    mutationFn: async (id: string) => {
      if (!firestore) throw new Error('Firestore is not initialized')
      await updateDoc(doc(firestore, params.name, id), {
        deletedAt: Timestamp.now()
      })
      return { id, deletedAt: Timestamp.now() } as Doc<T>
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [params.name] })
    }
  })
}
