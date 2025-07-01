/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 메인 성격 유형 열거형
 * - REVOLUTIONER: 창조가
 * - EMOTIONER: 상담가
 * - ACTIONER: 행동가
 * - DETECTOR: 분석가
 */
export enum MainType {
  REVOLUTIONER = 'REVOLUTIONER', // 창조가 (revolutioner)
  EMOTIONER = 'EMOTIONER', // 상담가 (emotioner)
  ACTIONER = 'ACTIONER', // 행동가 (actioner)
  DETECTOR = 'DETECTOR', // 분석가 (detector)
}

/**
 * MainType 열거형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const MainTypeValues = Object.values(MainType) as string[]

/**
 * MainType 객체의 키를 문자열 배열로 변환
 */
export const MainTypeKeys = Object.keys(MainType) as string[]

/**
 * MainType 객체의 키-값 쌍 배열
 */
export const MainTypeEntries = Object.entries(MainType) as [string, string][]

/**
 * MainType 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const MainTypeValuesEntries = Object.values(MainType).map((value) => [value, value]) as [string, string][]

/**
 * MainType 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const MainTypeKeysEntries = Object.keys(MainType).map((key) => [key, key]) as [string, string][]

/**
 * 창조가(Revolutioner) 서브타입 열거형
 * - REVOLUTIONER: 창조가
 * - SHERPA: 안내자
 * - MAVERICK: 승부사
 * - ARTISAN: 장인
 */
export enum RevolutionerSubType {
  REVOLUTIONER = 'REVOLUTIONER', // 창조가
  SHERPA = 'SHERPA', // 안내자
  MAVERICK = 'MAVERICK', // 승부사
  ARTISAN = 'ARTISAN', // 장인
}

/**
 * RevolutionerSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const RevolutionerSubTypeValues = Object.values(RevolutionerSubType) as string[]

/**
 * RevolutionerSubType 객체의 키를 문자열 배열로 변환
 */
export const RevolutionerSubTypeKeys = Object.keys(RevolutionerSubType) as string[]

/**
 * RevolutionerSubType 객체의 키-값 쌍 배열
 */
export const RevolutionerSubTypeEntries = Object.entries(RevolutionerSubType) as [string, string][]

/**
 * RevolutionerSubType 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const RevolutionerSubTypeValuesEntries = Object.values(RevolutionerSubType).map((value) => [value, value]) as [string, string][]

/**
 * RevolutionerSubType 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const RevolutionerSubTypeKeysEntries = Object.keys(RevolutionerSubType).map((key) => [key, key]) as [string, string][]

/**
 * 상담가(Emotioner) 서브타입 열거형
 * - EMOTIONER: 상담가
 * - CATALYST: 촉진자
 * - SPOKESPERSON: 대변인
 * - ORCHESTRATOR: 조직자
 */
export enum EmotionerSubType {
  EMOTIONER = 'EMOTIONER', // 상담가
  CATALYST = 'CATALYST', // 촉진자
  SPOKESPERSON = 'SPOKESPERSON', // 대변인
  ORCHESTRATOR = 'ORCHESTRATOR', // 조직자
}

/**
 * EmotionerSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const EmotionerSubTypeValues = Object.values(EmotionerSubType) as string[]

/**
 * EmotionerSubType 객체의 키를 문자열 배열로 변환
 */
export const EmotionerSubTypeKeys = Object.keys(EmotionerSubType) as string[]

/**
 * EmotionerSubType 객체의 키-값 쌍 배열
 */
export const EmotionerSubTypeEntries = Object.entries(EmotionerSubType) as [string, string][]

/**
 * EmotionerSubType 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const EmotionerSubTypeValuesEntries = Object.values(EmotionerSubType).map((value) => [value, value]) as [string, string][]

/**
 * EmotionerSubType 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const EmotionerSubTypeKeysEntries = Object.keys(EmotionerSubType).map((key) => [key, key]) as [string, string][]

/**
 * 행동가(Actioner) 서브타입 열거형
 * - ACTIONER: 행동가
 * - INNOVATOR: 혁명가
 * - KINGPIN: 선도자
 * - GUARDIAN: 보호자
 */
export enum ActionerSubType {
  ACTIONER = 'ACTIONER', // 행동가
  INNOVATOR = 'INNOVATOR', // 혁명가
  KINGPIN = 'KINGPIN', // 선도자
  GUARDIAN = 'GUARDIAN', // 보호자
}

/**
 * ActionerSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const ActionerSubTypeValues = Object.values(ActionerSubType) as string[]

/**
 * ActionerSubType 객체의 키를 문자열 배열로 변환
 */
export const ActionerSubTypeKeys = Object.keys(ActionerSubType) as string[]

/**
 * ActionerSubType 객체의 키-값 쌍 배열
 */
export const ActionerSubTypeEntries = Object.entries(ActionerSubType) as [string, string][]

/**
 * ActionerSubType 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const ActionerSubTypeValuesEntries = Object.values(ActionerSubType).map((value) => [value, value]) as [string, string][]

/**
 * ActionerSubType 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const ActionerSubTypeKeysEntries = Object.keys(ActionerSubType).map((key) => [key, key]) as [string, string][]

/**
 * 분석가(Detector) 서브타입 열거형
 * - DETECTOR: 분석가
 * - RENOVATOR: 쇄신가
 * - COORDINATOR: 조정자
 * - DEVELOPER: 개발자
 */
export enum DetectorSubType {
  DETECTOR = 'DETECTOR', // 분석가
  RENOVATOR = 'RENOVATOR', // 쇄신가
  COORDINATOR = 'COORDINATOR', // 조정자
  DEVELOPER = 'DEVELOPER', // 개발자
}

/**
 * DetectorSubType 열거형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const DetectorSubTypeValues = Object.values(DetectorSubType) as string[]

/**
 * DetectorSubType 객체의 키를 문자열 배열로 변환
 */
export const DetectorSubTypeKeys = Object.keys(DetectorSubType) as string[]

/**
 * DetectorSubType 객체의 키-값 쌍 배열
 */
export const DetectorSubTypeEntries = Object.entries(DetectorSubType) as [string, string][]

/**
 * DetectorSubType 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const DetectorSubTypeValuesEntries = Object.values(DetectorSubType).map((value) => [value, value]) as [string, string][]

/**
 * DetectorSubType 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const DetectorSubTypeKeysEntries = Object.keys(DetectorSubType).map((key) => [key, key]) as [string, string][]

/**
 * 진단 결과를 나타내는 타입
 */
export type DiagnosisCase = {
  mainType: MainType
  subType: RevolutionerSubType | EmotionerSubType | ActionerSubType | DetectorSubType
}

/**
 * 최종 타입의 짧은 이름을 가져오는 함수
 * @param diagnosisCase - 진단 결과
 * @returns 최종 타입의 짧은 이름
 */
export const getFinalTypeShortName = (diagnosisCase: DiagnosisCase): string => {
  switch (diagnosisCase.mainType) {
    case MainType.REVOLUTIONER:
      switch (diagnosisCase.subType) {
        case RevolutionerSubType.REVOLUTIONER:
          return 'R'
        case RevolutionerSubType.SHERPA:
          return 'RE'
        case RevolutionerSubType.MAVERICK:
          return 'RA'
        case RevolutionerSubType.ARTISAN:
          return 'RD'
        default:
          return 'R'
      }
    case MainType.EMOTIONER:
      switch (diagnosisCase.subType) {
        case EmotionerSubType.EMOTIONER:
          return 'E'
        case EmotionerSubType.CATALYST:
          return 'ER'
        case EmotionerSubType.SPOKESPERSON:
          return 'EA'
        case EmotionerSubType.ORCHESTRATOR:
          return 'ED'
        default:
          return 'E'
      }
    case MainType.ACTIONER:
      switch (diagnosisCase.subType) {
        case ActionerSubType.ACTIONER:
          return 'A'
        case ActionerSubType.INNOVATOR:
          return 'AR'
        case ActionerSubType.KINGPIN:
          return 'AE'
        case ActionerSubType.GUARDIAN:
          return 'AD'
        default:
          return 'A'
      }
    case MainType.DETECTOR:
      switch (diagnosisCase.subType) {
        case DetectorSubType.DETECTOR:
          return 'D'
        case DetectorSubType.RENOVATOR:
          return 'DR'
        case DetectorSubType.COORDINATOR:
          return 'DE'
        case DetectorSubType.DEVELOPER:
          return 'DA'
        default:
          return 'D'
      }
    default:
      return ''
  }
}

/**
 * 메인 타입에 따른 서브타입을 가져오는 함수
 */
export const getSubTypeByMain = (mainType: MainType) => {
  switch (mainType) {
    case MainType.REVOLUTIONER:
      return RevolutionerSubType
    case MainType.EMOTIONER:
      return EmotionerSubType
    case MainType.ACTIONER:
      return ActionerSubType
    case MainType.DETECTOR:
      return DetectorSubType
  }
}
