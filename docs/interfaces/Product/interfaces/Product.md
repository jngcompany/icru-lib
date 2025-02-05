[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/Product](../README.md) / Product

# Interface: Product

Defined in: [src/interfaces/Product.ts:29](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L29)

상품 정보를 나타내는 타입

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/Product.ts:40](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L40)

생성 일자

***

### creditPrice

> **creditPrice**: `number`

Defined in: [src/interfaces/Product.ts:34](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L34)

크레딧 가격

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/Product.ts:42](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L42)

***

### description

> **description**: `string`

Defined in: [src/interfaces/Product.ts:32](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L32)

상품 설명

***

### id

> **id**: `string`

Defined in: [src/interfaces/Product.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L30)

상품 아이디

***

### isActive

> **isActive**: `boolean`

Defined in: [src/interfaces/Product.ts:37](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L37)

***

### name

> **name**: `string`

Defined in: [src/interfaces/Product.ts:31](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L31)

상품 이름

***

### productType

> **productType**: [`ProductType`](../../../enums/ProductType/enumerations/ProductType.md)

Defined in: [src/interfaces/Product.ts:35](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L35)

상품 타입 (구독형, 일회성)

***

### salesPrice

> **salesPrice**: `number`

Defined in: [src/interfaces/Product.ts:33](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L33)

실제 판매 가격

***

### subscriptionDiscount?

> `optional` **subscriptionDiscount**: [`SubscriptionDiscount`](SubscriptionDiscount.md)

Defined in: [src/interfaces/Product.ts:39](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L39)

구독 할인 정보 - 구독형 상품인 경우에만 사용

***

### subscriptionMonths?

> `optional` **subscriptionMonths**: `number`

Defined in: [src/interfaces/Product.ts:38](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L38)

구독 기간 (개월) - 구독형 상품인 경우에만 사용

***

### target

> **target**: [`ProductTarget`](../../../enums/ProductTarget/enumerations/ProductTarget.md)

Defined in: [src/interfaces/Product.ts:36](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L36)

타켓 사용자

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/Product.ts:41](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Product.ts#L41)

업데이트 일자
