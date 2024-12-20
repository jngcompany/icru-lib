[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useListQuery

# Function: useListQuery()

> **useListQuery**\<`T`\>(`params`, `firestore`): [`UseListQueryResult`](../interfaces/UseListQueryResult.md)\<`T`\>

리스트 쿼리 훅

## Type Parameters

• **T** *extends* [`Doc`](../interfaces/Doc.md)\<`T`\>

리스트 아이템의 타입

## Parameters

### params

[`UseListQueryParams`](../interfaces/UseListQueryParams.md)

리스트 쿼리 파라미터

### firestore

`Firestore`

Firestore 인스턴스

## Returns

[`UseListQueryResult`](../interfaces/UseListQueryResult.md)\<`T`\>

리스트 쿼리 결과

## Example

```ts
const { items, page, pages, total, error, fetch } = useListQuery({ name: Collections.USERS, size: 10, fields: ['name', 'email'], where: [{ field: 'status', operator: '==', value: 'active' }], deleted: false }, firestore)
```

## Defined in

[hooks/useListQuery.tsx:31](https://github.com/jngcompany/icru-lib/blob/761e262af29fb19aea42bf1fcdb824ee624d8160/src/hooks/useListQuery.tsx#L31)
