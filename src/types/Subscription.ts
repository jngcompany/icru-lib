/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentReference } from 'firebase/firestore'
import { Debriefer } from './Debriefer'
import { Payment } from './Payment'

/**
 * 구독 유형을 정의하는 열거형
 */
export enum SubscriptionType {
  MONTHLY = 'MONTHLY', // 월간 구독
  YEARLY = 'YEARLY', // 연간 구독
}

/**
 * 구독 정보를 나타내는 인터페이스
 * 구독 유형, 금액, 결제 정보, 기간 및 상태 정보 포함
 */
export interface Subscription {
  id: string
  type: SubscriptionType
  amount: number
  billingKey: string // 토스페이먼츠 빌링키
  customerKey: string // 토스페이먼츠 고객 식별키
  payment: Payment
  debriefer: Debriefer
  startDate: Date
  endDate: Date
  nextBillingDate: Date
  isActive: boolean
  lastBillingStatus?: {
    // 마지막 결제 상태
    success: boolean
    message?: string
    billedAt: Date
  }
  createdAt: Date
  updatedAt: Date
  canceledAt?: Date | null
}

/**
 * 새로운 구독 생성 시 사용되는 타입
 * 자동 생성 필드와 참조 필드를 조정
 */
export type CreateSubscription = Omit<
  Subscription,
  'id' | 'createdAt' | 'updatedAt' | 'canceledAt' | 'debriefer' | 'payment'
> & {
  debriefer: DocumentReference
  payment: DocumentReference
}

/**
 * 구독 정보 업데이트 시 사용되는 타입
 */
export type UpdateSubscription = Omit<Subscription, 'id' | 'createdAt' | 'canceledAt'>
