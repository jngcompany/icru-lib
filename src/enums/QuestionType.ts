/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 질문 유형 열거형
 * - PROMOTION: 프로모션 문항
 * - TEMPERAMENT: 기본진단 문항
 * - RESILIENCE: 회복탄력성 문항
 */
export enum QuestionType {
  PROMOTION = 'PROMOTION',
  TEMPERAMENT = 'TEMPERAMENT',
  RESILIENCE = 'RESILIENCE',
}

/**
 * 질문 유형의 모든 가능한 문자열 값을 포함하는 배열
 */
export const QuestionTypeValues = Object.values(QuestionType) as string[]

/**
 * 질문 유형 객체의 키를 문자열 배열로 변환
 */
export const QuestionTypeKeys = Object.keys(QuestionType) as string[]

/**
 * 질문 유형 객체의 키-값 쌍 배열
 */
export const QuestionTypeEntries = Object.entries(QuestionType) as [string, string][]

/**
 * 질문 유형 값을 [value, value] 형태의 튜플 배열로 변환
 */
export const QuestionTypeValuesEntries = Object.values(QuestionType).map((value) => [value, value]) as [string, string][]

/**
 * 질문 유형 키를 [key, key] 형태의 튜플 배열로 변환
 */
export const QuestionTypeKeysEntries = Object.keys(QuestionType).map((key) => [key, key]) as [string, string][]
