/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { QuestionType } from '../enums'

/**
 * 사용자 답변을 나타내는 타입입니다.
 *
 * @property questionId 질문의 고유 식별자입니다.
 * @property selections 사용자가 선택한 답변입니다. 각 속성은 숫자, 불리언 또는 null 값을 가질 수 있습니다.
 * - R: 숫자, 불리언 또는 null 값
 * - E: 숫자, 불리언 또는 null 값
 * - A: 숫자, 불리언 또는 null 값
 * - D: 숫자, 불리언 또는 null 값
 */
export type UserAnswer = {
  questionId: string
  questionType: QuestionType
  selections: {
    R: number | boolean | null
    E: number | boolean | null
    A: number | boolean | null
    D: number | boolean | null
  }
}
