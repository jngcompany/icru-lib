/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 성별 열거형
 * - MALE: 남성
 * - FEMALE: 여성
 * - OTHER: 기타
 */
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

/**
 * 성별 옵션 배열
 * UI에서 사용할 수 있는 레이블과, 값 형태로 제공
 */
export const genderOptions = [
  { label: 'MALE', value: Gender.MALE },
  { label: 'FEMALE', value: Gender.FEMALE },
  { label: 'OTHER', value: Gender.OTHER },
]

/**
 * Gender 열거형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const GenderValues = Object.values(Gender) as string[]

/**
 * Gender 객체의 키를 문자열 배열로 변환
 */
export const GenderKeys = Object.keys(Gender) as string[]

/**
 * Gender 객체의 키-값 쌍 배열
 */
export const GenderEntries = Object.entries(Gender) as [string, string][]

/**
 * Gender 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const GenderValuesEntries = Object.values(Gender).map((value) => [value, value]) as [string, string][]

/**
 * Gender 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const GenderKeysEntries = Object.keys(Gender).map((key) => [key, key]) as [string, string][]
