[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [interfaces/Diagnosis](../README.md) / Diagnosis

# Interface: Diagnosis

Defined in: [src/interfaces/Diagnosis.ts:49](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L49)

진단 정보를 나타내는 인터페이스입니다.

 Diagnosis

## Extends

- `DocumentData`

## Indexable

\[`field`: `string`\]: `any`

## Properties

### answers?

> `optional` **answers**: [`UserAnswer`](../../../types/UserAnswer/interfaces/UserAnswer.md)[]

Defined in: [src/interfaces/Diagnosis.ts:75](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L75)

사용자 답변 목록입니다.

***

### case?

> `optional` **case**: `object`

Defined in: [src/interfaces/Diagnosis.ts:70](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L70)

진단 케이스 정보입니다.

#### mainType

> **mainType**: [`MainType`](../../../enums/DiagnosisCase/enumerations/MainType.md)

#### subType

> **subType**: [`RevolutionerSubType`](../../../enums/DiagnosisCase/enumerations/RevolutionerSubType.md) \| [`EmotionerSubType`](../../../enums/DiagnosisCase/enumerations/EmotionerSubType.md) \| [`ActionerSubType`](../../../enums/DiagnosisCase/enumerations/ActionerSubType.md) \| [`DetectorSubType`](../../../enums/DiagnosisCase/enumerations/DetectorSubType.md)

***

### createdAt

> **createdAt**: `Timestamp`

Defined in: [src/interfaces/Diagnosis.ts:77](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L77)

생성 일시입니다.

***

### debriefer?

> `optional` **debriefer**: [`Debriefer`](../../Debriefer/interfaces/Debriefer.md)

Defined in: [src/interfaces/Diagnosis.ts:54](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L54)

디브리퍼 정보입니다.

***

### deletedAt?

> `optional` **deletedAt**: `null` \| `Timestamp`

Defined in: [src/interfaces/Diagnosis.ts:79](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L79)

삭제 일시입니다.

***

### id

> **id**: `string`

Defined in: [src/interfaces/Diagnosis.ts:50](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L50)

진단의 고유 식별자입니다.

***

### invitation?

> `optional` **invitation**: [`Invitation`](../../Invitation/interfaces/Invitation.md)

Defined in: [src/interfaces/Diagnosis.ts:76](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L76)

초대 정보입니다.

***

### isAnonymous

> **isAnonymous**: `boolean`

Defined in: [src/interfaces/Diagnosis.ts:52](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L52)

익명 여부를 나타냅니다.

***

### isFirst

> **isFirst**: `boolean`

Defined in: [src/interfaces/Diagnosis.ts:53](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L53)

첫 번째 진단 여부를 나타냅니다.

***

### questions?

> `optional` **questions**: `object`[] \| [`Question`](../../../types/Question/type-aliases/Question.md)[]

Defined in: [src/interfaces/Diagnosis.ts:74](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L74)

질문 목록입니다.

***

### scores

> **scores**: `object`

Defined in: [src/interfaces/Diagnosis.ts:56](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L56)

진단 점수입니다.

#### RESILIENCE

> **RESILIENCE**: `object`

##### RESILIENCE.A

> **A**: `number`

##### RESILIENCE.D

> **D**: `number`

##### RESILIENCE.E

> **E**: `number`

##### RESILIENCE.R

> **R**: `number`

#### TEMPERAMENT

> **TEMPERAMENT**: `object`

##### TEMPERAMENT.A

> **A**: `number`

##### TEMPERAMENT.D

> **D**: `number`

##### TEMPERAMENT.E

> **E**: `number`

##### TEMPERAMENT.R

> **R**: `number`

***

### status

> **status**: [`DiagnosisStatus`](../../../enums/DiagnosisStatus/enumerations/DiagnosisStatus.md)

Defined in: [src/interfaces/Diagnosis.ts:55](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L55)

진단 상태를 나타냅니다.

***

### updatedAt

> **updatedAt**: `Timestamp`

Defined in: [src/interfaces/Diagnosis.ts:78](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L78)

수정 일시입니다.

***

### user?

> `optional` **user**: [`User`](../../User/interfaces/User.md)

Defined in: [src/interfaces/Diagnosis.ts:51](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/interfaces/Diagnosis.ts#L51)

진단을 받은 사용자 정보입니다.
