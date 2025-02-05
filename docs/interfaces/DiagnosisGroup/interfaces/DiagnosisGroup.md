[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/DiagnosisGroup](../README.md) / DiagnosisGroup

# Interface: DiagnosisGroup

Defined in: [src/interfaces/DiagnosisGroup.ts:22](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L22)

진단 그룹을 나타내는 인터페이스입니다.

 DiagnosisGroup

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/DiagnosisGroup.ts:30](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L30)

진단 그룹이 생성된 시간입니다.

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/DiagnosisGroup.ts:32](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L32)

진단 그룹이 삭제된 시간입니다. 선택적 속성입니다.

***

### description

> **description**: `string`

Defined in: [src/interfaces/DiagnosisGroup.ts:25](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L25)

진단 그룹에 대한 설명입니다.

***

### diagnoses

> **diagnoses**: [`Diagnosis`](../../Diagnosis/interfaces/Diagnosis.md)[]

Defined in: [src/interfaces/DiagnosisGroup.ts:28](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L28)

진단 그룹에 속한 진단 목록입니다.

***

### id

> **id**: `string`

Defined in: [src/interfaces/DiagnosisGroup.ts:23](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L23)

진단 그룹의 고유 식별자입니다.

***

### leader

> **leader**: [`User`](../../User/interfaces/User.md)

Defined in: [src/interfaces/DiagnosisGroup.ts:26](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L26)

진단 그룹의 리더입니다.

***

### members

> **members**: [`User`](../../User/interfaces/User.md)[]

Defined in: [src/interfaces/DiagnosisGroup.ts:27](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L27)

진단 그룹의 멤버들입니다.

***

### name

> **name**: `string`

Defined in: [src/interfaces/DiagnosisGroup.ts:24](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L24)

진단 그룹의 이름입니다.

***

### subGroups

> **subGroups**: [`DiagnosisGroup`](DiagnosisGroup.md)[]

Defined in: [src/interfaces/DiagnosisGroup.ts:29](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L29)

하위 진단 그룹 목록입니다.

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/DiagnosisGroup.ts:31](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/DiagnosisGroup.ts#L31)

진단 그룹이 마지막으로 업데이트된 시간입니다.
