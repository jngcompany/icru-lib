[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useDeleteDoc

# Function: useDeleteDoc()

> **useDeleteDoc**\<`T`\>(`params`, `firestore`): `UseMutationResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`, `string`\>

문서 삭제를 위한 커스텀 훅

## Type Parameters

• **T**

## Parameters

### params

[`UseDeleteDocParams`](../interfaces/UseDeleteDocParams.md)

{UseDeleteDocParams} - 컬렉션 이름을 포함한 파라미터

### firestore

`Firestore`

{Firestore} - Firestore 인스턴스

## Returns

`UseMutationResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`, `string`\>

- 문서 삭제 mutation 결과

## Throws

- Firestore가 초기화되지 않았을 경우 에러

## Example

```ts
const { mutate } = useDeleteDoc({ name: CollectionNames.PRODUCT })
mutate('productId')
```

## Defined in

[hooks/useDeleteDoc.tsx:17](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/hooks/useDeleteDoc.tsx#L17)
