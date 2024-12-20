[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useCreateDoc

# Function: useCreateDoc()

> **useCreateDoc**\<`T`\>(`params`, `firestore`): `UseMutationResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`, `T`\>

제품 생성을 위한 커스텀 훅

## Type Parameters

• **T**

## Parameters

### params

[`UseCreateDocParams`](../interfaces/UseCreateDocParams.md)\<`T`\>

{UseCreateDocParams<T>} - 컬렉션 이름과 콜백 함수

### firestore

`Firestore`

{Firestore} - Firestore 인스턴스

## Returns

`UseMutationResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`, `T`\>

- 제품 생성 mutation 결과

## Throws

- Firestore가 초기화되지 않았을 경우 에러

## Example

```ts
const { mutate } = useCreateDoc({ name: CollectionNames.PRODUCT, callback: (doc) => { console.log(doc) } })
mutate({ name: 'Product 1', price: 1000, stock: 10 })
```

## Defined in

[hooks/useCreateDoc.tsx:23](https://github.com/jngcompany/icru-lib/blob/761e262af29fb19aea42bf1fcdb824ee624d8160/src/hooks/useCreateDoc.tsx#L23)
