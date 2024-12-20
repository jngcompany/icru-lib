import { addDoc, collection, Timestamp } from "firebase/firestore"

import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import { Firestore } from "firebase/firestore"
import { Doc } from "src/interfaces/Doc"
import { UseCreateDocParams } from "src/interfaces/UseCreateDocParams"

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
export default function useCreateDoc<T>(params: UseCreateDocParams<T>, firestore: Firestore): UseMutationResult<Doc<T>, Error, T> {
  const queryClient = useQueryClient()

  return useMutation<Doc<T>, Error, T>({
    /**
     * 제품을 생성하는 함수
     *
     * @param input - 제품 생성에 필요한 데이터
     * @returns 생성된 제품 정보
     */
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
