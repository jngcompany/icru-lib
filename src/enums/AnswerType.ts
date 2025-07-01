/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 답변 유형 열거형
 * - R: 창조가 유형
 * - E: 상담가 유형
 * - A: 행동가 유형
 * - D: 분석가 유형
 */
export enum AnswerType {
  R = 'R',
  E = 'E',
  A = 'A',
  D = 'D',
}

/**
 * UI에서 사용 가능한 답변 유형 옵션 목록
 */
export const AnswerTypeList = [
  { value: AnswerType.R, label: 'R' },
  { value: AnswerType.E, label: 'E' },
  { value: AnswerType.A, label: 'A' },
  { value: AnswerType.D, label: 'D' },
]
