/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { MainType } from "../enums/DiagnosisCase";


/**
 * ICRU 서브 타입 열거형
 * 메인 타입과 조합되어 16가지의 세부 타입을 형성
 */
export enum SubType {
  // REVOLUTIONER TYPES
  REVOLUTIONER = 'REVOLUTIONER',
  SHERPA = 'SHERPA',
  MAVERICK = 'MAVERICK',
  ARTISAN = 'ARTISAN',

  // EMOTIONER TYPES
  EMOTIONER = 'EMOTIONER',
  CATALYST = 'CATALYST',
  SPOKESPERSON = 'SPOKESPERSON',
  ORCHESTRATOR = 'ORCHESTRATOR',

  // ACTIONER TYPES
  ACTIONER = 'ACTIONER',
  INNOVATOR = 'INNOVATOR',
  KINGPIN = 'KINGPIN',
  GUARDIAN = 'GUARDIAN',

  // DETECTOR TYPES
  DETECTOR = 'DETECTOR',
  RENOVATOR = 'RENOVATOR',
  COORDINATOR = 'COORDINATOR',
  DEVELOPER = 'DEVELOPER',
}

/**
 * 선호도 레벨 열거형
 * 각 성향의 강도를 나타내는 6단계 레벨
 */
export enum PreferenceLevel {
  VERY_LOW = 'VERY_LOW',
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  STRONG = 'STRONG',
  VERY_STRONG = 'VERY_STRONG',
  ULTRA_STRONG = 'ULTRA_STRONG',
}

/**
 * 각 선호도 레벨에 해당하는 점수 범위
 */
export const PREFERENCE_SCORES = {
  [PreferenceLevel.VERY_LOW]: { min: 9, max: 11 },
  [PreferenceLevel.LOW]: { min: 12, max: 16 },
  [PreferenceLevel.MODERATE]: { min: 17, max: 22 },
  [PreferenceLevel.STRONG]: { min: 23, max: 27 },
  [PreferenceLevel.VERY_STRONG]: { min: 28, max: 32 },
  [PreferenceLevel.ULTRA_STRONG]: { min: 33, max: 36 },
} as const

/**
 * ICRU 코드 타입
 * 두 문자로 구성된 16가지 가능한 조합
 * 첫 번째 문자는 주요 성향, 두 번째 문자는 부가 성향을 나타냄
 */
export type ICRUCode = 'RR' | 'RE' | 'RA' | 'RD' | 'EE' | 'ER' | 'EA' | 'ED' | 'AA' | 'AR' | 'AE' | 'AD' | 'DD' | 'DR' | 'DE' | 'DA'

/**
 * ICRU 코드와 해당하는 메인/서브 타입 매핑
 */
export const TYPE_MAPPING: Record<ICRUCode, { mainType: MainType; subType: SubType }> = {
  RR: { mainType: MainType.REVOLUTIONER, subType: SubType.REVOLUTIONER },
  RE: { mainType: MainType.REVOLUTIONER, subType: SubType.SHERPA },
  RA: { mainType: MainType.REVOLUTIONER, subType: SubType.MAVERICK },
  RD: { mainType: MainType.REVOLUTIONER, subType: SubType.ARTISAN },

  EE: { mainType: MainType.EMOTIONER, subType: SubType.EMOTIONER },
  ER: { mainType: MainType.EMOTIONER, subType: SubType.CATALYST },
  EA: { mainType: MainType.EMOTIONER, subType: SubType.SPOKESPERSON },
  ED: { mainType: MainType.EMOTIONER, subType: SubType.ORCHESTRATOR },

  AA: { mainType: MainType.ACTIONER, subType: SubType.ACTIONER },
  AR: { mainType: MainType.ACTIONER, subType: SubType.INNOVATOR },
  AE: { mainType: MainType.ACTIONER, subType: SubType.KINGPIN },
  AD: { mainType: MainType.ACTIONER, subType: SubType.GUARDIAN },

  DD: { mainType: MainType.DETECTOR, subType: SubType.DETECTOR },
  DR: { mainType: MainType.DETECTOR, subType: SubType.RENOVATOR },
  DE: { mainType: MainType.DETECTOR, subType: SubType.COORDINATOR },
  DA: { mainType: MainType.DETECTOR, subType: SubType.DEVELOPER },
}

/**
 * ICRU 점수 인터페이스
 * 각 성향(R, E, A, D)에 대한 점수를 포함
 */
export interface ICRUScores {
  /** Revolutioner 점수 (9-36) */
  R: number
  /** Emotioner 점수 (9-36) */
  E: number
  /** Actioner 점수 (9-36) */
  A: number
  /** Detector 점수 (9-36) */
  D: number
}

/**
 * 점수가 같을 때 적용되는 우선순위 순서
 * A(Actioner) > D(Detector) > R(Revolutioner) > E(Emotioner)
 */
export const ICRU_PRIORITY_ORDER: (keyof ICRUScores)[] = ['A', 'D', 'R', 'E']

/**
 * 주어진 점수에 해당하는 선호도 레벨을 반환
 * @param score - 9에서 36 사이의 정규화된 점수
 * @returns 해당하는 선호도 레벨
 * @throws 점수가 유효한 범위를 벗어난 경우
 */
export const getPreferenceLevel = (score: number): PreferenceLevel => {
  for (const [level, range] of Object.entries(PREFERENCE_SCORES)) {
    if (score >= range.min && score <= range.max) {
      return level as PreferenceLevel
    }
  }
  throw new Error(`Invalid score: ${score}`)
}

/**
 * 주어진 점수가 유효한 범위(9-36) 내에 있는지 확인
 * @param score - 검사할 점수
 * @returns 점수가 유효한 범위 내에 있으면 true
 */
export const isScoreInRange = (score: number): boolean => {
  return score >= 9 && score <= 36
}

/**
 * ICRU 점수를 기반으로 메인 타입을 결정
 * @param scores - ICRU 점수 객체
 * @returns 결정된 메인 타입
 * @throws 유효하지 않은 점수가 있는 경우
 */
export const determineMainType = (scores: ICRUScores): MainType => {
  const entries = Object.entries(scores) as [keyof ICRUScores, number][]
  const [highestKey] = entries.reduce((max, current) => (current[1] > max[1] ? current : max))

  switch (highestKey) {
    case 'R':
      return MainType.REVOLUTIONER
    case 'E':
      return MainType.EMOTIONER
    case 'A':
      return MainType.ACTIONER
    case 'D':
      return MainType.DETECTOR
    default:
      throw new Error('Invalid scores')
  }
}

/**
 * ICRU 점수를 기반으로 ICRU 코드를 생성
 * @param scores - ICRU 점수 객체
 * @returns 생성된 ICRU 코드
 */
export const getICRUCode = (scores: ICRUScores): ICRUCode => {
  const entries = Object.entries(scores) as [keyof ICRUScores, number][]
  const sortedScores = entries.sort((a, b) => {
    // 점수가 다른 경우 점수로 정렬
    if (b[1] !== a[1]) {
      return b[1] - a[1]
    }

    // 점수가 같은 경우 우선순위로 정렬 (A > D > R > E)
    return ICRU_PRIORITY_ORDER.indexOf(a[0]) - ICRU_PRIORITY_ORDER.indexOf(b[0])
  })

  const [highest, ...others] = sortedScores
  const highestPreference = getPreferenceLevel(highest[1])

  // 순수 타입 판별을 위한 임계값 설정
  // 이 값보다 낮은 점수는 해당 성향이 약하다고 판단
  const originalThreshold = 22

  // 다른 모든 점수들이 임계값보다 낮은지 확인
  // others 배열의 모든 요소를 순회하며 점수가 임계값보다 낮은지 체크
  // ([_, score]) 구조 분해를 통해 점수값만 추출하여 비교
  const allOthersVeryLow = others.every(([_, score]) => originalThreshold >= score)

  // 가장 높은 성향이 매우 강하고(ULTRA_STRONG)
  // 다른 모든 성향이 임계값보다 낮은 경우
  // 이는 한 가지 성향이 매우 뚜렷한 "순수" 타입을 의미
  if (highestPreference === PreferenceLevel.ULTRA_STRONG && allOthersVeryLow) {
    // 가장 높은 성향을 두 번 반복하여 순수 타입 코드 생성
    // 예: R -> RR, E -> EE 등
    return `${highest[0]}${highest[0]}` as ICRUCode
  }

  // 그 외의 경우
  const secondHighest = others[0]

  return `${highest[0]}${secondHighest[0]}` as ICRUCode
}

/**
 * ICRU 코드에 해당하는 타입 정보를 반환
 * @param code - ICRU 코드
 * @returns 메인 타입과 서브 타입 정보
 * @throws 유효하지 않은 ICRU 코드인 경우
 */
export const getTypeInfo = (code: ICRUCode) => {
  const typeInfo = TYPE_MAPPING[code]

  if (!typeInfo) {
    throw new Error(`Invalid ICRU code: ${code}`)
  }

  return typeInfo
}

/**
 * ICRU 점수를 기반으로 최종 ICRU 타입을 결정
 * @param scores - ICRU 점수 객체
 * @returns ICRU 코드, 메인 타입, 서브 타입을 포함한 결과
 * @throws 유효하지 않은 점수가 있는 경우
 */
export const determineICRUType = (scores: ICRUScores) => {
  // 점수 유효성 검사
  Object.values(scores).forEach((score) => {
    if (!isScoreInRange(score)) {
      throw new Error(`Invalid score value: ${score}. Score must be between 9 and 36.`)
    }
  })

  const code = getICRUCode(scores)

  return {
    code,
    ...getTypeInfo(code),
  }
}
