/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 제품 유형 열거형
 * @enum {string}
 * @property {string} SUBSCRIPTION - 구독형 제품
 * @property {string} ONE_TIME - 일회성 제품
 */
export enum ProductType {
  SUBSCRIPTION = 'SUBSCRIPTION',
  ONE_TIME = 'ONE_TIME',
}

/**
 * ProductType 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const ProductTypeValues = Object.values(ProductType) as string[]

/**
 * ProductType 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 *
 * 이 변수는 ProductType 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const ProductTypeKeys = Object.keys(ProductType) as string[]

/**
 * ProductType 객체의 키-값 쌍 배열
 * 이 변수는 `ProductType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 *
 * 이 변수는 `Object.entries`를 사용하여 `ProductType` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const ProductTypeEntries = Object.entries(ProductType) as [string, string][]

/**
 * ProductType 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 *
 * 이 변수는 `Object.values`를 사용하여 `ProductType` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 *
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const ProductTypeValuesEntries = Object.values(ProductType).map((value) => [value, value]) as [string, string][]

/**
 * ProductType 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 *
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const ProductTypeKeysEntries = Object.keys(ProductType).map((key) => [key, key]) as [string, string][]
