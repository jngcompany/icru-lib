[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useDoc

# Function: useDoc()

> **useDoc**\<`T`\>(`params`, `firestore`): `UseQueryResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\> \| `null`, `Error`\>

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

`UseQueryResult`\<[`Doc`](../interfaces/Doc.md)\<`T`\> \| `null`, `Error`\>

UseQueryResult - 문서 조회 쿼리 결과

## Defined in

[hooks/useDoc.tsx:21](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/hooks/useDoc.tsx#L21)
