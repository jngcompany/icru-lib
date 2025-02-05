[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [types/Payment](../README.md) / Payment

# Interface: Payment

Defined in: [src/types/Payment.ts:92](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L92)

결제 정보를 나타내는 인터페이스입니다.
 Payment

## Properties

### amount

> **amount**: `number`

Defined in: [src/types/Payment.ts:96](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L96)

결제 금액

***

### approvedAt?

> `optional` **approvedAt**: `string`

Defined in: [src/types/Payment.ts:100](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L100)

결제 승인 시간

***

### cancels?

> `optional` **cancels**: `object`[]

Defined in: [src/types/Payment.ts:113](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L113)

취소 내역

#### approvedBy?

> `optional` **approvedBy**: `string`

#### cancelAmount

> **cancelAmount**: `number`

#### canceledAt

> **canceledAt**: `string`

#### cancelReason

> **cancelReason**: `string`

#### refundStatus

> **refundStatus**: `"COMPLETED"` \| `"PENDING"` \| `"FAILED"`

#### requestedBy

> **requestedBy**: `string`

***

### createdAt

> **createdAt**: `string`

Defined in: [src/types/Payment.ts:121](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L121)

생성 시간

***

### currency

> **currency**: `string`

Defined in: [src/types/Payment.ts:97](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L97)

통화

***

### customerName

> **customerName**: `string`

Defined in: [src/types/Payment.ts:103](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L103)

고객명

***

### diagnosisId

> **diagnosisId**: `string`

Defined in: [src/types/Payment.ts:104](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L104)

진단 ID

***

### failureReason?

> `optional` **failureReason**: [`PaymentFailure`](PaymentFailure.md)

Defined in: [src/types/Payment.ts:106](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L106)

실패 사유

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/types/Payment.ts:110](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L110)

메타데이터

#### Index Signature

\[`key`: `string`\]: `any`

***

### method

> **method**: [`PaymentMethod`](PaymentMethod.md)

Defined in: [src/types/Payment.ts:102](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L102)

결제 수단

***

### orderId

> **orderId**: `string`

Defined in: [src/types/Payment.ts:94](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L94)

주문 ID

***

### orderName

> **orderName**: `string`

Defined in: [src/types/Payment.ts:95](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L95)

주문명

***

### paymentData?

> `optional` **paymentData**: `object`

Defined in: [src/types/Payment.ts:107](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L107)

추가 결제 데이터

#### Index Signature

\[`key`: `string`\]: `any`

***

### paymentKey

> **paymentKey**: `string`

Defined in: [src/types/Payment.ts:93](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L93)

결제 키

***

### reportType

> **reportType**: `string`

Defined in: [src/types/Payment.ts:105](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L105)

보고서 유형

***

### requestedAt

> **requestedAt**: `string`

Defined in: [src/types/Payment.ts:99](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L99)

결제 요청 시간

***

### status

> **status**: `"IN_PROGRESS"` \| `"READY"` \| `"WAITING_FOR_DEPOSIT"` \| `"DONE"` \| `"CANCELED"` \| `"PARTIAL_CANCELED"` \| `"ABORTED"` \| `"EXPIRED"`

Defined in: [src/types/Payment.ts:98](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L98)

결제 상태

***

### updatedAt

> **updatedAt**: `string`

Defined in: [src/types/Payment.ts:122](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L122)

수정 시간

***

### useEscrow

> **useEscrow**: `boolean`

Defined in: [src/types/Payment.ts:101](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L101)

에스크로 사용 여부
