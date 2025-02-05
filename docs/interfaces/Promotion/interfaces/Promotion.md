[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/Promotion](../README.md) / Promotion

# Interface: Promotion

Defined in: [src/interfaces/Promotion.ts:19](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L19)

프로모션 인터페이스
 Promotion

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### answers

> **answers**: [`UserAnswer`](../../../types/UserAnswer/interfaces/UserAnswer.md)[]

Defined in: [src/interfaces/Promotion.ts:23](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L23)

사용자 답변

***

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/Promotion.ts:36](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L36)

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/Promotion.ts:38](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L38)

***

### id

> **id**: `string`

Defined in: [src/interfaces/Promotion.ts:20](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L20)

***

### logs?

> `optional` **logs**: `object`[]

Defined in: [src/interfaces/Promotion.ts:24](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L24)

#### action

> **action**: `"select"` \| `"next"` \| `"deselect"` \| `"back"`

#### step

> **step**: `number`

#### timestamp

> **timestamp**: `Timestamp`

#### type

> **type**: `"R"` \| `"E"` \| `"A"` \| `"D"`

***

### score

> **score**: `object`

Defined in: [src/interfaces/Promotion.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L30)

점수

#### A

> **A**: `number`

#### D

> **D**: `number`

#### E

> **E**: `number`

#### R

> **R**: `number`

***

### status

> **status**: [`PromotionStatus`](../../../enums/PromotionStatus/enumerations/PromotionStatus.md)

Defined in: [src/interfaces/Promotion.ts:22](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L22)

상태 (NOT_STARTED: 생성만됨, IN_PROGRESS: 진행중, COMPLETED: 완료됨)

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/Promotion.ts:37](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L37)

***

### user?

> `optional` **user**: [`User`](../../User/interfaces/User.md)

Defined in: [src/interfaces/Promotion.ts:21](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Promotion.ts#L21)
