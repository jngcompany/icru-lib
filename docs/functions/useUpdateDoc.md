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

[hooks/useUpdateDoc.tsx:20](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/hooks/useUpdateDoc.tsx#L20)
