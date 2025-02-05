/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 질문 유형 열거형
 * @enum {string}
 * @property {string} PROMOTION - 프로모션 문항
 * @property {string} TEMPERAMENT - 기본진단 문항
 * @property {string} RESILIENCE - 회복탄력성 문항
 */
export enum QuestionType {
  PROMOTION = 'PROMOTION',
  TEMPERAMENT = 'TEMPERAMENT',
  RESILIENCE = 'RESILIENCE',
}

/**
 * 질문 유형 값 배열
 * 이 상수는 `QuestionType` 열거형 또는 객체의 모든 가능한 문자열 값을 포함합니다.
 * 코드베이스에서 유효한 질문 유형을 반복, 검증 또는 엄격한 형식으로 사용해야 할 경우 유용합니다.
 */
export const QuestionTypeValues = Object.values(QuestionType) as string[]
/**
 * 질문 유형 키 배열
 * 이 변수는 `QuestionType` 객체의 모든 키를 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 동적으로 질문 유형 키를 작업하거나 반복해야 할 경우 유용합니다.
 */
export const QuestionTypeKeys = Object.keys(QuestionType) as string[]

/**
 * 질문 유형 키-값 쌍 배열
 * 이 변수는 `QuestionType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 이 변수는 `QuestionType` 객체의 속성을 반복 가능한 형식으로 제공하는 데 사용됩니다.
 */
export const QuestionTypeEntries = Object.entries(QuestionType) as [string, string][]

/**
 * 질문 유형 값 쌍 배열
 * 이 변수는 `QuestionType` 열거형의 값에서 파생된 키-값 쌍 배열을 나타냅니다.
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 형식은 [값, 값]입니다.
 */
export const QuestionTypeValuesEntries = Object.values(QuestionType).map((value) => [value, value]) as [
  string,
  string,
][]

/**
 * 질문 유형 키-값 쌍 배열
 * 이 변수는 `QuestionType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 이 변수는 `QuestionType` 객체의 속성을 반복 가능한 형식으로 제공하는 데 사용됩니다.
 * 형식은 [키, 키]입니다.
 */
export const QuestionTypeKeysEntries = Object.keys(QuestionType).map((key) => [key, key]) as [string, string][]
