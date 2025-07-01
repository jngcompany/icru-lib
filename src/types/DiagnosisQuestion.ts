/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { QuestionType } from '../enums/QuestionType'
import { Answer } from './Answer'

/**
 * 진단 질문 인터페이스.
 *
 * 사용자에게 제시되는 진단 질문의 구조를 정의합니다.
 * 질문 내용, 답변 옵션, 타입 등의 정보를 포함합니다.
 */
export interface DiagnosisQuestion {
  id: string
  question: {
    ko: string
    en: string
  }
  answers?: Answer[]
  type: QuestionType
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type CreateQuestion = Omit<DiagnosisQuestion, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
export type UpdateQuestion = Omit<DiagnosisQuestion, 'id' | 'createdAt' | 'deletedAt'>
export type RemoveQuestion = Pick<DiagnosisQuestion, 'deletedAt'>
export type QuestionListItem = Pick<DiagnosisQuestion, 'id' | 'question'>
