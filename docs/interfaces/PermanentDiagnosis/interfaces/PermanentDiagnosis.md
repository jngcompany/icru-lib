[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/PermanentDiagnosis](../README.md) / PermanentDiagnosis

# Interface: PermanentDiagnosis

Defined in: [src/interfaces/PermanentDiagnosis.ts:18](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L18)

영구 진단을 나타내는 인터페이스입니다.
 PermanentDiagnosis

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### autoReport

> **autoReport**: `boolean`

Defined in: [src/interfaces/PermanentDiagnosis.ts:23](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L23)

영구 진단의 자동 보고서 작성 여부입니다.

***

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/PermanentDiagnosis.ts:29](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L29)

***

### debriefer

> **debriefer**: [`Debriefer`](../../Debriefer/interfaces/Debriefer.md)

Defined in: [src/interfaces/PermanentDiagnosis.ts:27](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L27)

영구 진단의 디브리퍼 객체입니다.

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/PermanentDiagnosis.ts:31](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L31)

***

### diagnoses

> **diagnoses**: [`Diagnosis`](../../Diagnosis/interfaces/Diagnosis.md)[]

Defined in: [src/interfaces/PermanentDiagnosis.ts:28](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L28)

영구 진단의 진단 객체들의 배열입니다.

***

### id

> **id**: `string`

Defined in: [src/interfaces/PermanentDiagnosis.ts:19](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L19)

***

### isActive

> **isActive**: `boolean`

Defined in: [src/interfaces/PermanentDiagnosis.ts:25](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L25)

***

### link

> **link**: `string`

Defined in: [src/interfaces/PermanentDiagnosis.ts:21](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L21)

영구 진단의 링크입니다.

***

### name

> **name**: `string`

Defined in: [src/interfaces/PermanentDiagnosis.ts:20](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L20)

영구 진단의 이름입니다.

***

### password

> **password**: `string`

Defined in: [src/interfaces/PermanentDiagnosis.ts:24](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L24)

***

### reportLimit

> **reportLimit**: [`ReportLimit`](../../ReportLimit/interfaces/ReportLimit.md)

Defined in: [src/interfaces/PermanentDiagnosis.ts:26](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L26)

영구 진단의 보고서 제한 객체들의 배열입니다.

***

### reportType

> **reportType**: [`ReportType`](../../../enums/ReportType/enumerations/ReportType.md)

Defined in: [src/interfaces/PermanentDiagnosis.ts:22](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L22)

영구 진단의 보고서 유형입니다.

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/PermanentDiagnosis.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/PermanentDiagnosis.ts#L30)
