[**@jngcompany/icru-lib**](../../../README.md)

***

[@jngcompany/icru-lib](../../../README.md) / [utils/ICRUTypeCalculator](../README.md) / getTypeInfo

# Function: getTypeInfo()

> **getTypeInfo**(`code`): `object`

Defined in: [src/utils/ICRUTypeCalculator.ts:216](https://github.com/jngcompany/icru-lib/blob/d3a4d9c24074b22f396121b6f6d7c5106c66ae75/src/utils/ICRUTypeCalculator.ts#L216)

ICRU 코드에 해당하는 타입 정보를 반환

## Parameters

### code

[`ICRUCode`](../type-aliases/ICRUCode.md)

ICRU 코드

## Returns

`object`

메인 타입과 서브 타입 정보

### mainType

> **mainType**: [`MainType`](../../../enums/DiagnosisCase/enumerations/MainType.md)

### subType

> **subType**: [`SubType`](../enumerations/SubType.md)

## Throws

유효하지 않은 ICRU 코드인 경우
