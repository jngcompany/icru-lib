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

[hooks/useUpdateDoc.tsx:19](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/hooks/useUpdateDoc.tsx#L19)
