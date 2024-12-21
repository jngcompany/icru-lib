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

[interfaces/UseListQueryResult.ts:21](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryResult.ts#L21)

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

[interfaces/UseListQueryResult.ts:22](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryResult.ts#L22)

***

### items

> **items**: `T`[]

#### Defined in

[interfaces/UseListQueryResult.ts:17](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryResult.ts#L17)

***

### page

> **page**: `number`

#### Defined in

[interfaces/UseListQueryResult.ts:18](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryResult.ts#L18)

***

### pages

> **pages**: `number`

#### Defined in

[interfaces/UseListQueryResult.ts:19](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryResult.ts#L19)

***

### total

> **total**: `number`

#### Defined in

[interfaces/UseListQueryResult.ts:20](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryResult.ts#L20)
