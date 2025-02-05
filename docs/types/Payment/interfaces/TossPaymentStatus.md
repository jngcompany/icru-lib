[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [types/Payment](../README.md) / TossPaymentStatus

# Interface: TossPaymentStatus

Defined in: [src/types/Payment.ts:6](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L6)

토스 결제 상태를 나타내는 인터페이스입니다.
 TossPaymentStatus

## Properties

### status

> **status**: `"IN_PROGRESS"` \| `"READY"` \| `"WAITING_FOR_DEPOSIT"` \| `"DONE"` \| `"CANCELED"` \| `"PARTIAL_CANCELED"` \| `"ABORTED"` \| `"EXPIRED"`

Defined in: [src/types/Payment.ts:7](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/types/Payment.ts#L7)

결제 상태 ('READY' | 'IN_PROGRESS' | 'WAITING_FOR_DEPOSIT' | 'DONE' | 'CANCELED' | 'PARTIAL_CANCELED' | 'ABORTED' | 'EXPIRED')
