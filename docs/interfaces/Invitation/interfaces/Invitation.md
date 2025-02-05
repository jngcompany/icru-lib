[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/Invitation](../README.md) / Invitation

# Interface: Invitation

Defined in: [src/interfaces/Invitation.ts:28](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L28)

초대 정보를 나타내는 인터페이스입니다.

 Invitation

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/Invitation.ts:36](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L36)

생성 시간

***

### debriefer

> **debriefer**: [`Debriefer`](../../Debriefer/interfaces/Debriefer.md)

Defined in: [src/interfaces/Invitation.ts:32](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L32)

보고자 정보

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/Invitation.ts:38](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L38)

삭제 시간 (선택적)

***

### expiredAt?

> `optional` **expiredAt**: `Timestamp`

Defined in: [src/interfaces/Invitation.ts:35](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L35)

만료 시간 (선택적)

***

### id

> **id**: `string`

Defined in: [src/interfaces/Invitation.ts:29](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L29)

초대 ID

***

### link

> **link**: `string`

Defined in: [src/interfaces/Invitation.ts:31](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L31)

초대 링크

***

### reportType

> **reportType**: [`ReportType`](../../../enums/ReportType/enumerations/ReportType.md)

Defined in: [src/interfaces/Invitation.ts:33](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L33)

보고서 유형

***

### status

> **status**: [`InvitationStatus`](../../../enums/InvitationStatus/enumerations/InvitationStatus.md)

Defined in: [src/interfaces/Invitation.ts:34](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L34)

초대 상태

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/Invitation.ts:37](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L37)

업데이트 시간

***

### username

> **username**: `string`

Defined in: [src/interfaces/Invitation.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Invitation.ts#L30)

사용자 이름
