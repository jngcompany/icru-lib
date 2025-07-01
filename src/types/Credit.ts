/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentReference } from 'firebase/firestore'

import { Debriefer } from './Debriefer'

/**
 * 디브리퍼의 현재 크레딧 잔액을 나타내는 인터페이스
 * 각 디브리퍼당 하나의 크레딧 문서만 존재하며, 현재 보유 크레딧 수량만 관리
 */
export interface Credit {
  id: string
  debriefer: Debriefer
  balance: number // 현재 크레딧 잔액
  createdAt: Date
  updatedAt: Date
}

/**
 * 크레딧 생성 시 사용되는 타입
 */
export type CreateCredit = Omit<Credit, 'id' | 'createdAt' | 'updatedAt' | 'debriefer'> & {
  debriefer: DocumentReference
}

/**
 * 관리자 페이지에서 크레딧 잔액 설정 시 사용되는 타입
 */
export type SetCreditBalance = {
  balance: number
  debriefer: DocumentReference | string
}

/**
 * 크레딧 업데이트 시 사용되는 타입
 */
export type UpdateCredit = Omit<Credit, 'id' | 'createdAt'>
