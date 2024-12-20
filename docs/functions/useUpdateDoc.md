[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useUpdateDoc

# Function: useUpdateDoc()

> **useUpdateDoc**\<`T`\>(`params`, `firestore`): `UseMutationResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`, [`Doc`](../interfaces/Doc.md)\<`T`\>\>

문서 업데이트 훅

## Type Parameters

• **T**

문서 데이터 타입

## Parameters

### params

[`UseUpdateDocParams`](../interfaces/UseUpdateDocParams.md)

문서 업데이트 파라미터

### firestore

`Firestore`

Firestore 인스턴스

## Returns

`UseMutationResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`, [`Doc`](../interfaces/Doc.md)\<`T`\>\>

문서 업데이트 mutation 결과

## Example

```ts
const { mutate } = useUpdateDoc({ name: Collections.USERS })
mutate({ id: '123', name: 'John Doe' })
```

## Defined in

[hooks/useUpdateDoc.tsx:22](https://github.com/jngcompany/icru-lib/blob/761e262af29fb19aea42bf1fcdb824ee624d8160/src/hooks/useUpdateDoc.tsx#L22)
