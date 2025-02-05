/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { CreditType } from '../enums/CreditType'
import { Payment } from '../types/Payment'
import { Debriefer } from './Debriefer'

/**
 * @interface Credit
 * @extends DocumentData
 *
 * 크레딧 정보를 나타내는 인터페이스입니다.
 *
 * @property {string} id - 크레딧의 고유 식별자입니다.
 * @property {CreditType} type - 크레딧의 유형입니다.
 * @property {number} amount - 크레딧의 금액입니다.
 * @property {Payment} [payment] - 크레딧과 관련된 결제 정보입니다.
 * @property {Debriefer} [debriefer] - 크레딧과 관련된 보고자 정보입니다.
 * @property {Timestamp} createdAt - 크레딧이 생성된 날짜와 시간입니다.
 * @property {Timestamp} updatedAt - 크레딧이 마지막으로 업데이트된 날짜와 시간입니다.
 * @property {Timestamp | null} [deletedAt] - 크레딧이 삭제된 날짜와 시간입니다. 삭제되지 않은 경우 null입니다.
 */
export interface Credit extends DocumentData {
  id: string
  type: CreditType
  amount: number
  payment?: Payment
  debriefer?: Debriefer
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

/**
 * `CreateCredit` 타입은 `Credit` 타입에서 `id`와 `deletedAt` 속성을 제외한 타입입니다.
 *
 * 이 타입은 새로운 크레딧 정보를 생성할 때 사용됩니다.
 */
export type CreateCredit = Omit<Credit, 'id' | 'deletedAt'>

/**
 * `UpdateCredit` 타입은 `Credit` 타입에서 `id`, `createdAt`, `deletedAt` 속성을 제외한 타입입니다.
 *
 * 이 타입은 크레딧 정보를 업데이트할 때 사용됩니다.
 */
export type UpdateCredit = Omit<Credit, 'id' | 'createdAt' | 'deletedAt'>
