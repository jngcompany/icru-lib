/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 진단 상태를 나타내는 열거형
 * @enum {string}
 * @property {string} NOT_STARTED - 진단이 시작되지 않은 상태
 * @property {string} IN_PROGRESS - 진단이 진행 중인 상태
 * @property {string} COMPLETED - 진단이 완료된 상태
 * @property {string} REVIEWED - 진단이 검토된 상태
 */
export enum DiagnosisStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REVIEWED = 'REVIEWED'
}

/**
 * DiagnosisStatus 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const DiagnosisStatusValues = Object.values(DiagnosisStatus) as string[]

/**
 * DiagnosisStatus 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 * 이 변수는 DiagnosisStatus 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const DiagnosisStatusKeys = Object.keys(DiagnosisStatus) as string[]

/**
 * DiagnosisStatus 객체의 키-값 쌍 배열
 * 이 변수는 `DiagnosisStatus` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 
 * 이 변수는 `Object.entries`를 사용하여 `DiagnosisStatus` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const DiagnosisStatusEntries = Object.entries(DiagnosisStatus) as [string, string][]

/**
 * DiagnosisStatus 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 
 * 이 변수는 `Object.values`를 사용하여 `DiagnosisStatus` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 * 
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const DiagnosisStatusValuesEntries = Object.values(DiagnosisStatus).map(value => [value, value]) as [string, string][]

/**
 * DiagnosisStatus 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 * 
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const DiagnosisStatusKeysEntries = Object.keys(DiagnosisStatus).map(key => [key, key]) as [string, string][]
