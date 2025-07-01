/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { PromotionStatus } from '../enums/PromotionStatus'
import { User } from './User'
import { UserAnswer } from './UserAnswer'

/**
 * 프로모션 진단 정보를 나타내는 인터페이스
 * 사용자 정보, 진단 상태, 사용자 답변, 로그, 점수 포함
 */
export interface Promotion {
  id: string
  user?: User
  status: PromotionStatus
  answers: UserAnswer[]
  logs?: Array<{
    step: number
    type: 'R' | 'E' | 'A' | 'D'
    action: 'select' | 'deselect' | 'next' | 'back'
    timestamp: Date
  }>
  score: {
    R: number
    E: number
    A: number
    D: number
  }
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 프로모션 생성 시 사용되는 타입
 */
export type CreatePromotion = Omit<Promotion, 'id' | 'deletedAt'>

/**
 * 프로모션 업데이트 시 사용되는 타입
 */
export type UpdatePromotion = Omit<Promotion, 'id' | 'createdAt' | 'deletedAt'>
