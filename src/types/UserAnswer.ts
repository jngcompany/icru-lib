/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { QuestionType } from '../enums/QuestionType'

/**
 * 사용자 답변을 나타내는 타입
 * 질문 ID와 R/E/A/D 유형별 선택한 답변 값 포함
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
