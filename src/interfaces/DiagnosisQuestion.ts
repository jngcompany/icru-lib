/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { QuestionType } from '../enums/QuestionType'
import { Answer } from '../types/Answer'

/**
 * 진단 질문 인터페이스.
 *
 * @interface DiagnosisQuestion
 * @extends {DocumentData}
 *
 * @property {string} id - 질문의 고유 식별자.
 * @property {Object} question - 질문 내용.
 * @property {string} question.ko - 한국어 질문.
 * @property {string} question.en - 영어 질문.
 * @property {Answer[]} [answers] - 선택 가능한 답변 목록 (선택 사항).
 * @property {QuestionType} type - 질문 유형.
 * @property {Timestamp} createdAt - 생성 시간.
 * @property {Timestamp} updatedAt - 마지막 수정 시간.
 * @property {Timestamp | null} [deletedAt] - 삭제 시간 (선택 사항).
 */
export interface DiagnosisQuestion extends DocumentData {
  id: string
  question: {
    ko: string
    en: string
  }
  answers?: Answer[]
  type: QuestionType
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateQuestion = Omit<DiagnosisQuestion, 'id' | 'deletedAt'>
export type UpdateQuestion = Omit<DiagnosisQuestion, 'id' | 'createdAt' | 'deletedAt'>
export type RemoveQuestion = Pick<DiagnosisQuestion, 'deletedAt'>
