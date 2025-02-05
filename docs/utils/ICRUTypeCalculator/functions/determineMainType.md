[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [utils/ICRUTypeCalculator](../README.md) / determineMainType

# Function: determineMainType()

> **determineMainType**(`scores`): [`MainType`](../../../enums/DiagnosisCase/enumerations/MainType.md)

Defined in: [src/utils/ICRUTypeCalculator.ts:161](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/utils/ICRUTypeCalculator.ts#L161)

ICRU 점수를 기반으로 메인 타입을 결정

## Parameters

### scores

[`ICRUScores`](../interfaces/ICRUScores.md)

ICRU 점수 객체

## Returns

[`MainType`](../../../enums/DiagnosisCase/enumerations/MainType.md)

결정된 메인 타입

## Throws

유효하지 않은 점수가 있는 경우
