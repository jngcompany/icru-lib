/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { QuestionType } from '../enums/QuestionType'

/**
 * 사용자의 답변을 나타내는 인터페이스
 * @interface UserAnswer
 * @extends {Answer}
 * @property {AnswerType[] | boolean} selections - 사용자가 선택한 답변들 또는 boolean 값
 */
export type UserAnswer = {
  questionId: string
  type: QuestionType
  selections: {
    R: number | boolean | null
    E: number | boolean | null
    A: number | boolean | null
    D: number | boolean | null
  }
}
