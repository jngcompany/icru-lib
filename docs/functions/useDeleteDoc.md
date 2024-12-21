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

[hooks/useDeleteDoc.tsx:23](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/hooks/useDeleteDoc.tsx#L23)
