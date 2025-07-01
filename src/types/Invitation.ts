import { DocumentReference } from 'firebase/firestore'
import { Gender } from '../enums/Gender'
import { InvitationStatus } from '../enums/InvitationStatus'
import { ReportType } from '../enums/ReportType'
import { CreditTransaction } from './CreditTransaction'
import { Debriefer } from './Debriefer'

/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 초대 정보를 나타내는 인터페이스
 * 초대 링크, 상태, 보고서 유형 및 관련 설정 포함
 */
export interface Invitation {
  id: string
  link: string
  autoReport: boolean
  password: string
  debriefer: Debriefer
  reportType: ReportType
  status: InvitationStatus
  creditTransactions: CreditTransaction[]
  expiredAt?: Date
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 초대장 생성 시 사용되는 타입
 * 자동 생성 필드와 참조 필드를 조정
 */
export type CreateInvitation = Omit<Invitation, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'debriefer'> & {
  debriefer: DocumentReference
}

/**
 * 초대장 업데이트 시 사용되는 타입
 */
export type UpdateInvitation = Omit<Invitation, 'id' | 'createdAt' | 'deletedAt'>

/**
 * 초대장에 개인 정보가 추가된 타입
 * 사용자의 식별자, 이름, 성별, 생년 및 익명 여부 포함
 */
export type InvitationWithPersonalInfo = Omit<Invitation, 'user'> & {
  user: {
    uid: string
    displayName: string
    gender: Gender
    birthYear: number
    isAnonymous: boolean
  }
}
