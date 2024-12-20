[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / UseListQueryResult

# Interface: UseListQueryResult\<T\>

리스트 쿼리 훅의 결과 인터페이스
 UseListQueryResult

## Param

{T[]} - 현재 페이지의 아이템 배열

## Param

{number} - 현재 페이지 번호

## Param

{number} - 전체 페이지 수

## Param

{number} - 전체 아이템 수

## Param

{Error | null} - 에러 객체

## Param

{(params: { page: number }) => Promise<void>} - 특정 페이지의 데이터를 가져오는 함수

## Type Parameters

• **T**

## Properties

### error

> **error**: `null` \| `Error`

#### Defined in

[interfaces/UseListQueryResult.ts:16](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/interfaces/UseListQueryResult.ts#L16)

***

### fetch()

> **fetch**: (`params`) => `Promise`\<`void`\>

#### Parameters

##### params

###### page

`number`

#### Returns

`Promise`\<`void`\>

#### Defined in

[interfaces/UseListQueryResult.ts:17](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/interfaces/UseListQueryResult.ts#L17)

***

### items

> **items**: `T`[]

#### Defined in

[interfaces/UseListQueryResult.ts:12](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/interfaces/UseListQueryResult.ts#L12)

***

### page

> **page**: `number`

#### Defined in

[interfaces/UseListQueryResult.ts:13](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/interfaces/UseListQueryResult.ts#L13)

***

### pages

> **pages**: `number`

#### Defined in

[interfaces/UseListQueryResult.ts:14](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/interfaces/UseListQueryResult.ts#L14)

***

### total

> **total**: `number`

#### Defined in

[interfaces/UseListQueryResult.ts:15](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/interfaces/UseListQueryResult.ts#L15)
