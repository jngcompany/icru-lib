/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentReference } from 'firebase/firestore'
import { CreditTransactionType } from '../enums/CreditTransactionType'
import { Debriefer } from './Debriefer'
import { Payment } from './Payment'
import { Subscription } from './Product'
import { User } from './User'

/**
 * 크레딧 거래 내역을 나타내는 인터페이스
 * 모든 크레딧 관련 거래를 기록하며, 수정되지 않는 불변 데이터
 */
export interface CreditTransaction {
  id: string
  type: CreditTransactionType
  amount: number // 양수: 크레딧 증가, 음수: 크레딧 감소
  description: string // 거래 설명
  debriefer: Debriefer

  // 관련 참조 데이터 (거래 유형에 따라 선택적)
  payment?: Payment // 구매 시 결제 정보

  subscription?: Subscription // 구독 관련 크레딧일 경우

  target?: DocumentReference // 사용 대상 (초대장, 그룹 진단 등)

  grantedBy?: User // 크레딧을 부여한 관리자 (관리자 부여 시)

  // 거래 후 잔액 (스냅샷)
  balanceAfter: number

  createdAt: Date
  // 불변 데이터이므로 updatedAt, deletedAt 없음
}

/**
 * 크레딧 거래 생성 시 사용되는 타입
 */
export type CreateCreditTransaction = Omit<
  CreditTransaction,
  'id' | 'createdAt' | 'debriefer' | 'payment' | 'subscription'
> & {
  debriefer: DocumentReference
  payment?: DocumentReference
  subscription?: DocumentReference
}

/**
 * 관리자가 크레딧을 부여할 때 사용하는 타입
 */
export type GrantCreditTransaction = Pick<CreateCreditTransaction, 'type' | 'amount' | 'description'> & {
  grantedId: string // 크레딧을 부여한 관리자 ID
  debrieferId: string // 크레딧을 부여받는 디브리퍼 ID
}
/**
 * 크레딧 사용 시 편의를 위한 타입
 */
export type UseCreditTransaction = {
  amount: number // 사용할 크레딧 수량 (양수)
  description: string
  debriefer: DocumentReference
  target: DocumentReference
}

/**
 * 크레딧 구매 시 편의를 위한 타입
 */
export type PurchaseCreditTransaction = {
  amount: number // 구매한 크레딧 수량
  description: string
  debriefer: DocumentReference
  payment: DocumentReference
}
