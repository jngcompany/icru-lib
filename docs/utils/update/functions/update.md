[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [utils/update](../README.md) / update

# Function: update()

> **update**\<`T`\>(`data`): `Omit`\<`T`, `"id"`\> & `object`

Defined in: [src/utils/update.ts:10](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/utils/update.ts#L10)

주어진 데이터를 업데이트하고 `updatedAt` 속성을 현재 시간으로 설정합니다.

## Type Parameters

• **T**

업데이트할 데이터의 타입

## Parameters

### data

`any`

업데이트할 데이터 객체

## Returns

`Omit`\<`T`, `"id"`\> & `object`

업데이트된 데이터 객체
