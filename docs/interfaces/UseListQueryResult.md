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

에러 객체

#### Defined in

[interfaces/UseListQueryResult.ts:21](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/interfaces/UseListQueryResult.ts#L21)

***

### fetch()

> **fetch**: (`params`) => `Promise`\<`void`\>

특정 페이지의 데이터를 가져오는 함수

#### Parameters

##### params

###### page

`number`

가져올 페이지 번호

#### Returns

`Promise`\<`void`\>

#### Defined in

[interfaces/UseListQueryResult.ts:26](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/interfaces/UseListQueryResult.ts#L26)

***

### items

> **items**: `T`[]

현재 페이지의 아이템 배열

#### Defined in

[interfaces/UseListQueryResult.ts:13](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/interfaces/UseListQueryResult.ts#L13)

***

### page

> **page**: `number`

현재 페이지 번호

#### Defined in

[interfaces/UseListQueryResult.ts:15](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/interfaces/UseListQueryResult.ts#L15)

***

### pages

> **pages**: `number`

전체 페이지 수

#### Defined in

[interfaces/UseListQueryResult.ts:17](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/interfaces/UseListQueryResult.ts#L17)

***

### total

> **total**: `number`

전체 아이템 수

#### Defined in

[interfaces/UseListQueryResult.ts:19](https://github.com/jngcompany/icru-lib/blob/256d6a1256b31526527eaee4aeab346b456a87aa/src/interfaces/UseListQueryResult.ts#L19)
