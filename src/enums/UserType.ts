/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 사용자 유형을 나타내는 열거형
 * - ADMIN: 관리자
 * - PERSONAL: 사용자
 * - DEBRIEFER: 디브리퍼
 */
export enum UserType {
  ADMIN = 'ADMIN',
  PERSONAL = 'PERSONAL',
  DEBRIEFER = 'DEBRIEFER',
}

/**
 * UserType 열거형의 모든 가능한 문자열 값을 포함하는 배열
 * 유효한 사용자 유형을 반복, 검증 또는 엄격한 형식으로 사용할 때 유용
 */
export const UserTypeValues = Object.values(UserType) as string[]

/**
 * UserType 객체의 키를 문자열 배열로 변환
 * 속성에 대한 쉬운 접근이나 반복 작업에 사용
 */
export const UserTypeKeys = Object.keys(UserType) as string[]

/**
 * UserType 객체의 키-값 쌍 배열
 */
export const UserTypeEntries = Object.entries(UserType) as [string, string][]

/**
 * UserType 열거형의 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const UserTypeValuesEntries = Object.values(UserType).map((value) => [value, value]) as [string, string][]

/**
 * UserType 객체의 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const UserTypeKeysEntries = Object.keys(UserType).map((key) => [key, key]) as [string, string][]
