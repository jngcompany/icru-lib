[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / UseListQueryParams

# Interface: UseListQueryParams

리스트 쿼리 파라미터
 UseListQueryParams

## Param

{Collections} - 컬렉션 이름

## Param

{number} - 페이지 크기

## Param

{string[]} - 필드 목록

## Param

{boolean} - 삭제된 문서 포함 여부

## Param

{Object} - 쿼리 조건

## Param

{boolean} - 쿼리 활성 여부

## Properties

### deleted?

> `optional` **deleted**: `boolean`

#### Defined in

[interfaces/UseListQueryParams.ts:23](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryParams.ts#L23)

***

### enabled?

> `optional` **enabled**: `boolean`

#### Defined in

[interfaces/UseListQueryParams.ts:25](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryParams.ts#L25)

***

### fields?

> `optional` **fields**: `string`[]

#### Defined in

[interfaces/UseListQueryParams.ts:22](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryParams.ts#L22)

***

### name

> **name**: [`Collections`](../enumerations/Collections.md)

#### Defined in

[interfaces/UseListQueryParams.ts:20](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryParams.ts#L20)

***

### size

> **size**: `number`

#### Defined in

[interfaces/UseListQueryParams.ts:21](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryParams.ts#L21)

***

### where?

> `optional` **where**: `object`[]

#### field

> **field**: `string`

#### operator

> **operator**: `string`

#### value

> **value**: `any`

#### Defined in

[interfaces/UseListQueryParams.ts:24](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/interfaces/UseListQueryParams.ts#L24)
