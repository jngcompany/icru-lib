[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [types/Payment](../README.md) / PaymentMethod

# Interface: PaymentMethod

Defined in: [src/types/Payment.ts:26](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L26)

결제 수단을 나타내는 인터페이스입니다.
 PaymentMethod

## Properties

### installmentPlanMonths?

> `optional` **installmentPlanMonths**: `number`

Defined in: [src/types/Payment.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L30)

할부 개월 수

***

### number?

> `optional` **number**: `string`

Defined in: [src/types/Payment.ts:29](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L29)

결제 수단 번호

***

### provider?

> `optional` **provider**: `string`

Defined in: [src/types/Payment.ts:28](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L28)

결제 제공자

***

### type

> **type**: `"CARD"` \| `"VIRTUAL_ACCOUNT"` \| `"MOBILE_PHONE"` \| `"TRANSFER"` \| `"CULTURE_GIFT_CERTIFICATE"` \| `"BOOK_GIFT_CERTIFICATE"`

Defined in: [src/types/Payment.ts:27](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L27)

결제 수단 유형
