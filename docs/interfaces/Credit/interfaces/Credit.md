[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/Credit](../README.md) / Credit

# Interface: Credit

Defined in: [src/interfaces/Credit.ts:26](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L26)

Credit

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### amount

> **amount**: `number`

Defined in: [src/interfaces/Credit.ts:29](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L29)

크레딧의 금액입니다.

***

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/Credit.ts:32](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L32)

크레딧이 생성된 날짜와 시간입니다.

***

### debriefer?

> `optional` **debriefer**: [`Debriefer`](../../Debriefer/interfaces/Debriefer.md)

Defined in: [src/interfaces/Credit.ts:31](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L31)

크레딧과 관련된 보고자 정보입니다.

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/Credit.ts:34](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L34)

크레딧이 삭제된 날짜와 시간입니다. 삭제되지 않은 경우 null입니다.

***

### id

> **id**: `string`

Defined in: [src/interfaces/Credit.ts:27](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L27)

크레딧의 고유 식별자입니다.

***

### payment?

> `optional` **payment**: [`Payment`](../../../types/Payment/interfaces/Payment.md)

Defined in: [src/interfaces/Credit.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L30)

크레딧과 관련된 결제 정보입니다.

***

### type

> **type**: [`CreditType`](../../../enums/CreditType/enumerations/CreditType.md)

Defined in: [src/interfaces/Credit.ts:28](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L28)

크레딧의 유형입니다.

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/Credit.ts:33](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Credit.ts#L33)

크레딧이 마지막으로 업데이트된 날짜와 시간입니다.
