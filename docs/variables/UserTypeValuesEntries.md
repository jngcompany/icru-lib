[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / UserTypeValuesEntries

# Variable: UserTypeValuesEntries

> `const` **UserTypeValuesEntries**: [`string`, `string`][]

UserType 열거형의 값에서 파생된 키-값 쌍 배열
각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.

이 변수는 `Object.values`를 사용하여 `UserType` 열거형의 값을 추출한 다음
튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.

이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
`[string, string][]`

## Defined in

[enums/UserType.ts:53](https://github.com/jngcompany/icru-lib/blob/cee5a8006a4970de6269ef7414374f6c7339529e/src/enums/UserType.ts#L53)
