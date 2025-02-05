[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [utils/ICRUTypeCalculator](../README.md) / determineICRUType

# Function: determineICRUType()

> **determineICRUType**(`scores`): `object`

Defined in: [src/utils/ICRUTypeCalculator.ts:230](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/utils/ICRUTypeCalculator.ts#L230)

ICRU 점수를 기반으로 최종 ICRU 타입을 결정

## Parameters

### scores

[`ICRUScores`](../interfaces/ICRUScores.md)

ICRU 점수 객체

## Returns

`object`

ICRU 코드, 메인 타입, 서브 타입을 포함한 결과

### code

> **code**: [`ICRUCode`](../type-aliases/ICRUCode.md)

### mainType

> **mainType**: [`MainType`](../../../enums/DiagnosisCase/enumerations/MainType.md)

### subType

> **subType**: [`SubType`](../enumerations/SubType.md)

## Throws

유효하지 않은 점수가 있는 경우
