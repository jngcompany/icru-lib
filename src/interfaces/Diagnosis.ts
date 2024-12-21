/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { Gender } from '../enums'
import { DiagnosisStatus } from '../enums'
import { Question } from './Question'
import { Doc } from './Doc'

/**
 * 사용자의 답변을 나타내는 인터페이스
 * @interface UserAnswer
 * @extends {Answer}
 * @property {AnswerType[] | boolean} selections - 사용자가 선택한 답변들 또는 boolean 값
 */
export interface UserAnswer {
  questionId: string
  selections: {
    R: number | boolean | null
    E: number | boolean | null
    A: number | boolean | null
    D: number | boolean | null
  }
}

/**
 * 진단 정보를 나타내는 인터페이스
 * @interface Diagnosis
 * @property {string} userId - 사용자 ID
 * @property {boolean} isAnonymous - 익명 여부
 * @property {string} userDisplayName - 사용자 표시 이름
 * @property {Gender} userGender - 사용자 성별
 * @property {number} userBirthYear - 사용자 출생년도
 * @property {string | null} [debrieferId] - 디브리퍼 ID (선택사항)
 * @property {string | null} [debrieferDisplayName] - 디브리퍼 표시 이름 (선택사항)
 * @property {string | null} [organizationId] - 조직 ID (선택사항)
 * @property {string | null} [organizationName] - 조직 이름 (선택사항)
 * @property {DiagnosisStatus} status - 진단 상태
 * @property {string[]} questions - 질문 ID 목록
 * @property {UserAnswer[]} answers - 사용자 답변 목록
 */
export interface Diagnosis {
  userId: string
  isAnonymous: boolean
  userDisplayName: string
  userGender: Gender
  userBirthYear: number
  debrieferId?: string | null
  debrieferDisplayName?: string | null
  organizationId?: string | null
  organizationName?: string | null
  status: DiagnosisStatus
  questions: { id: string; step: number }[] | Doc<Question>[]
  answers: UserAnswer[]
}
