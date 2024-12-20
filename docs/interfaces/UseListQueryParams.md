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

[interfaces/UseListQueryParams.ts:18](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/interfaces/UseListQueryParams.ts#L18)

***

### enabled?

> `optional` **enabled**: `boolean`

#### Defined in

[interfaces/UseListQueryParams.ts:20](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/interfaces/UseListQueryParams.ts#L20)

***

### fields?

> `optional` **fields**: `string`[]

#### Defined in

[interfaces/UseListQueryParams.ts:17](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/interfaces/UseListQueryParams.ts#L17)

***

### name

> **name**: [`Collections`](../enumerations/Collections.md)

#### Defined in

[interfaces/UseListQueryParams.ts:15](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/interfaces/UseListQueryParams.ts#L15)

***

### size

> **size**: `number`

#### Defined in

[interfaces/UseListQueryParams.ts:16](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/interfaces/UseListQueryParams.ts#L16)

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

[interfaces/UseListQueryParams.ts:19](https://github.com/jngcompany/icru-lib/blob/c1136b1cca3e7fccee98611dd392fe7b79b1145a/src/interfaces/UseListQueryParams.ts#L19)
