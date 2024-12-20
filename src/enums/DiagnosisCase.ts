/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 메인 성격 유형을 나타내는 열거형입니다.
 * @enum {string}
 * @property {string} REVOLUTIONER - 창조가
 * @property {string} EMOTIONER - 상담가
 * @property {string} ACTIONER - 행동가
 * @property {string} DETECTOR - 분석가
 */
export enum MainType {
  REVOLUTIONER = 'REVOLUTIONER',
  EMOTIONER = 'EMOTIONER',
  ACTIONER = 'ACTIONER',
  DETECTOR = 'DETECTOR',
}

/**
 * MainType 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const MainTypeValues = Object.values(MainType) as string[]

/**
 * MainType 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 * 이 변수는 MainType 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const MainTypeKeys = Object.keys(MainType) as string[]

/**
 * MainType 객체의 키-값 쌍 배열
 * 이 변수는 `MainType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 
 * 이 변수는 `Object.entries`를 사용하여 `MainType` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const MainTypeEntries = Object.entries(MainType) as [string, string][]

/**
 * MainType 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 
 * 이 변수는 `Object.values`를 사용하여 `MainType` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 * 
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const MainTypeValuesEntries = Object.values(MainType).map(value => [value, value]) as [string, string][]

/**
 * MainType 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 * 
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const MainTypeKeysEntries = Object.keys(MainType).map(key => [key, key]) as [string, string][]


/**
 * 창조가(Revolutioner)의 서브타입을 나타내는 열거형입니다.
 * @enum {string}
 * @property {string} ORIGINAL - 오리지널
 * @property {string} GUIDE - 안내자
 * @property {string} GAMBLER - 승부사
 * @property {string} ARTISAN - 장인
 */
export enum RevolutionerSubType {
  ORIGINAL = 'ORIGINAL',
  GUIDE = 'GUIDE',
  GAMBLER = 'GAMBLER',
  ARTISAN = 'ARTISAN',
}

/**
 * RevolutionerSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const RevolutionerSubTypeValues = Object.values(RevolutionerSubType) as string[]

/**
 * RevolutionerSubType 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 * 
 * 이 변수는 RevolutionerSubType 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const RevolutionerSubTypeKeys = Object.keys(RevolutionerSubType) as string[]

/**
 * RevolutionerSubType 객체의 키-값 쌍 배열
 * 이 변수는 `RevolutionerSubType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 
 * 이 변수는 `Object.entries`를 사용하여 `RevolutionerSubType` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const RevolutionerSubTypeEntries = Object.entries(RevolutionerSubType) as [string, string][]

/**
 * RevolutionerSubType 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 
 * 이 변수는 `Object.values`를 사용하여 `RevolutionerSubType` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 * 
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const RevolutionerSubTypeValuesEntries = Object.values(RevolutionerSubType).map(value => [value, value]) as [string, string][]

/**
 * RevolutionerSubType 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 * 
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const RevolutionerSubTypeKeysEntries = Object.keys(RevolutionerSubType).map(key => [key, key]) as [string, string][]



/**
 * 상담가(Emotioner)의 서브타입을 나타내는 열거형입니다.
 * @enum {string}
 * @property {string} ORIGINAL - 오리지널
 * @property {string} CATALYST - 촉진자
 * @property {string} SPOKESPERSON - 대변인
 * @property {string} ORCHESTRATOR - 조직자
 */
export enum EmotionerSubType {
  ORIGINAL = 'ORIGINAL',
  CATALYST = 'CATALYST',
  SPOKESPERSON = 'SPOKESPERSON',
  ORCHESTRATOR = 'ORCHESTRATOR',
}

/**
 * EmotionerSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const EmotionerSubTypeValues = Object.values(EmotionerSubType) as string[]

/**
 * EmotionerSubType 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 * 
 * 이 변수는 EmotionerSubType 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const EmotionerSubTypeKeys = Object.keys(EmotionerSubType) as string[]

/**
 * EmotionerSubType 객체의 키-값 쌍 배열
 * 이 변수는 `EmotionerSubType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 
 * 이 변수는 `Object.entries`를 사용하여 `EmotionerSubType` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const EmotionerSubTypeEntries = Object.entries(EmotionerSubType) as [string, string][]

/**
 * EmotionerSubType 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 
 * 이 변수는 `Object.values`를 사용하여 `EmotionerSubType` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 * 
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const EmotionerSubTypeValuesEntries = Object.values(EmotionerSubType).map(value => [value, value]) as [string, string][]

/**
 * EmotionerSubType 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 * 
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const EmotionerSubTypeKeysEntries = Object.keys(EmotionerSubType).map(key => [key, key]) as [string, string][]

/**
 * 행동가(Actioner)의 서브타입을 나타내는 열거형입니다.
 * @enum {string}
 * @property {string} ORIGINAL - 오리지널
 * @property {string} INNOVATOR - 혁명가
 * @property {string} KINGPIN - 선도자
 * @property {string} GUARDIAN - 보호자
 */
export enum ActionerSubType {
  ORIGINAL = 'ORIGINAL',
  INNOVATOR = 'INNOVATOR',
  KINGPIN = 'KINGPIN',
  GUARDIAN = 'GUARDIAN',
}

/**
 * ActionerSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const ActionerSubTypeValues = Object.values(ActionerSubType) as string[]

/**
 * ActionerSubType 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 * 
 * 이 변수는 ActionerSubType 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const ActionerSubTypeKeys = Object.keys(ActionerSubType) as string[]

/**
 * ActionerSubType 객체의 키-값 쌍 배열
 * 이 변수는 `ActionerSubType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 
 * 이 변수는 `Object.entries`를 사용하여 `ActionerSubType` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const ActionerSubTypeEntries = Object.entries(ActionerSubType) as [string, string][]

/**
 * ActionerSubType 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 
 * 이 변수는 `Object.values`를 사용하여 `ActionerSubType` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 * 
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const ActionerSubTypeValuesEntries = Object.values(ActionerSubType).map(value => [value, value]) as [string, string][]

/**
 * ActionerSubType 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 * 
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const ActionerSubTypeKeysEntries = Object.keys(ActionerSubType).map(key => [key, key]) as [string, string][]

/**
 * 분석가(Detector)의 서브타입을 나타내는 열거형입니다.
 * @enum {string}
 * @property {string} ORIGINAL - 오리지널
 * @property {string} RENOVATOR - 쇄신가
 * @property {string} COORDINATOR - 조정자
 * @property {string} DEVELOPER - 개발자
 */
export enum DetectorSubType {
  ORIGINAL = 'ORIGINAL',
  RENOVATOR = 'RENOVATOR',
  COORDINATOR = 'COORDINATOR',
  DEVELOPER = 'DEVELOPER',
}

/**
 * DetectorSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열입니다.
 */
export const DetectorSubTypeValues = Object.values(DetectorSubType) as string[]

/**
 * DetectorSubType 객체의 키를 문자열 배열로 캐스팅한 배열입니다.
 * 
 * 이 변수는 DetectorSubType 객체의 문자열 기반 키를 나타내며,
 * 속성에 대한 쉬운 접근이나 반복 작업을 위해 사용됩니다.
 */
export const DetectorSubTypeKeys = Object.keys(DetectorSubType) as string[]

/**
 * DetectorSubType 객체의 키-값 쌍 배열
 * 이 변수는 `DetectorSubType` 객체의 모든 속성을 추출하고 결과 배열을 문자열 배열로 캐스팅합니다.
 * 
 * 이 변수는 `Object.entries`를 사용하여 `DetectorSubType` 객체에서 모든 열거 가능한
 * 문자열 키의 [키, 값] 쌍을 검색하여 생성됩니다.
 */
export const DetectorSubTypeEntries = Object.entries(DetectorSubType) as [string, string][]

/**
 * DetectorSubType 열거형의 값에서 파생된 키-값 쌍 배열
 * 각 값은 두 개의 동일한 문자열 값을 포함하는 튜플로 매핑되어 효과적으로 2차원 배열을 생성합니다.
 * 
 * 이 변수는 `Object.values`를 사용하여 `DetectorSubType` 열거형의 값을 추출한 다음
 * 튜플 배열로 매핑하여 생성됩니다. 각 튜플은 키와 값으로 동일한 값을 반복합니다.
 * 
 * 이 변수의 타입은 문자열 튜플의 배열로 엄격하게 정의됩니다:
 * `[string, string][]`
 */
export const DetectorSubTypeValuesEntries = Object.values(DetectorSubType).map(value => [value, value]) as [string, string][]

/**
 * DetectorSubType 객체의 키에서 파생된 엔트리 배열
 * 각 엔트리는 키가 두 요소로 반복되는 튜플을 포함합니다.
 * 매핑 생성이나 키 일관성 보장에 유용합니다.
 * 
 * 이 변수는 각 튜플이 두 개의 문자열 값을 포함하는 튜플 배열로 정적 타입이 지정됩니다.
 */
export const DetectorSubTypeKeysEntries = Object.keys(DetectorSubType).map(key => [key, key]) as [string, string][]

/**
 * 진단 결과를 나타내는 타입입니다.
 */
export type DiagnosisCase = {
  mainType: MainType;
  subType:
    | RevolutionerSubType
    | EmotionerSubType
    | ActionerSubType
    | DetectorSubType;
};

/**
 * 메인 타입에 따른 서브타입을 가져오는 타입 가드입니다.
 */
export const getSubTypeByMain = (mainType: MainType) => {
  switch (mainType) {
    case MainType.REVOLUTIONER:
      return RevolutionerSubType;
    case MainType.EMOTIONER:
      return EmotionerSubType;
    case MainType.ACTIONER:
      return ActionerSubType;
    case MainType.DETECTOR:
      return DetectorSubType;
  }
}
