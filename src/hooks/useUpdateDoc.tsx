import { UseUpdateDocParams } from "src/interfaces/UseUpdateDocParams"
import { UseMutationResult } from "@tanstack/react-query"
import { Doc } from "src/interfaces"
import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { updateDoc, doc, Timestamp } from "firebase/firestore"
import { Firestore } from "firebase/firestore"

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

  return useMutation<Doc<T>, Error, Doc<T>>({
    /**
     * 문서를 업데이트하는 함수
     *
     * @param input - 업데이트할 문서 데이터
     * @returns 업데이트된 문서 정보
     */
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
