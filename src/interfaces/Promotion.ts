/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { PromotionStatus } from '../enums/PromotionStatus'
import { UserAnswer } from '../types/UserAnswer'
import { User } from './User'

/**
 * 프로모션 인터페이스
 * @interface Promotion
 * @property {string} userId - 사용자 ID
 * @property {PromotionStatus} status - 상태 (NOT_STARTED: 생성만됨, IN_PROGRESS: 진행중, COMPLETED: 완료됨)
 * @property {UserAnswer[]} answers - 사용자 답변
 * @property {Object} score - 점수
 */
export interface Promotion extends DocumentData {
  id: string
  user?: User
  status: PromotionStatus
  answers: UserAnswer[]
  logs?: Array<{
    step: number
    type: 'R' | 'E' | 'A' | 'D'
    action: 'select' | 'deselect' | 'next' | 'back'
    timestamp: Timestamp
  }>
  score: {
    R: number
    E: number
    A: number
    D: number
  }
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreatePromotion = Omit<Promotion, 'id' | 'deletedAt'>
export type UpdatePromotion = Omit<Promotion, 'id' | 'createdAt' | 'deletedAt'>
