[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useDoc

# Function: useDoc()

> **useDoc**\<`T`\>(`params`, `firestore`): `UseQueryResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`\>

단일 문서 조회를 위한 커스텀 훅

## Type Parameters

• **T**

## Parameters

### params

[`UseDocParams`](../interfaces/UseDocParams.md)

컬렉션 이름과 문서 ID를 포함한 파라미터

### firestore

`Firestore`

Firestore 인스턴스

## Returns

`UseQueryResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\>, `Error`\>

UseQueryResult - 문서 조회 쿼리 결과

## Defined in

[hooks/useDoc.tsx:24](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/hooks/useDoc.tsx#L24)
