/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * Enum for AnswerType (답변 유형)
 * @enum {string}
 * @property {string} R - 창조가 유형
 * @property {string} E - 상담가 유형
 * @property {string} A - 행동가 유형
 * @property {string} D - 분석가 유형
 */
export enum AnswerType {
  R = 'R',
  E = 'E',
  A = 'A',
  D = 'D',
}

export const AnswerTypeList = [
  { value: AnswerType.R, label: 'R' },
  { value: AnswerType.E, label: 'E' },
  { value: AnswerType.A, label: 'A' },
  { value: AnswerType.D, label: 'D' },
]
