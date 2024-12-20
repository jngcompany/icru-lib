[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / Diagnosis

# Interface: Diagnosis

진단 정보를 나타내는 인터페이스
 Diagnosis

## Properties

### answers

> **answers**: [`UserAnswer`](UserAnswer.md)[]

사용자 답변 목록

#### Defined in

interfaces/Diagnosis.ts:48

***

### debrieferDisplayName?

> `optional` **debrieferDisplayName**: `null` \| `string`

디브리퍼 표시 이름 (선택사항)

#### Defined in

interfaces/Diagnosis.ts:43

***

### debrieferId?

> `optional` **debrieferId**: `null` \| `string`

디브리퍼 ID (선택사항)

#### Defined in

interfaces/Diagnosis.ts:42

***

### organizationId?

> `optional` **organizationId**: `null` \| `string`

조직 ID (선택사항)

#### Defined in

interfaces/Diagnosis.ts:44

***

### organizationName?

> `optional` **organizationName**: `null` \| `string`

조직 이름 (선택사항)

#### Defined in

interfaces/Diagnosis.ts:45

***

### questions

> **questions**: `object`[] \| [`Doc`](Doc.md)\<[`Question`](../type-aliases/Question.md)\>[]

질문 ID 목록

#### Defined in

interfaces/Diagnosis.ts:47

***

### status

> **status**: [`DiagnosisStatus`](../enumerations/DiagnosisStatus.md)

진단 상태

#### Defined in

interfaces/Diagnosis.ts:46

***

### userBirthYear

> **userBirthYear**: `number`

사용자 출생년도

#### Defined in

interfaces/Diagnosis.ts:41

***

### userDisplayName

> **userDisplayName**: `string`

사용자 표시 이름

#### Defined in

interfaces/Diagnosis.ts:39

***

### userGender

> **userGender**: [`Gender`](../enumerations/Gender.md)

사용자 성별

#### Defined in

interfaces/Diagnosis.ts:40

***

### userId

> **userId**: `string`

사용자 ID

#### Defined in

interfaces/Diagnosis.ts:38
