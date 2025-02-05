/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { InvitationStatus } from '../enums/InvitationStatus'
import { ReportType } from '../enums/ReportType'
import { Debriefer } from './Debriefer'

/**
 * 초대 정보를 나타내는 인터페이스입니다.
 *
 * @interface Invitation
 * @extends DocumentData
 *
 * @property {string} id - 초대 ID
 * @property {string} username - 사용자 이름
 * @property {string} link - 초대 링크
 * @property {Debriefer} debriefer - 보고자 정보
 * @property {ReportType} reportType - 보고서 유형
 * @property {InvitationStatus} status - 초대 상태
 * @property {Timestamp} [expiredAt] - 만료 시간 (선택적)
 * @property {Timestamp} createdAt - 생성 시간
 * @property {Timestamp} updatedAt - 업데이트 시간
 * @property {Timestamp | null} [deletedAt] - 삭제 시간 (선택적)
 */
export interface Invitation extends DocumentData {
  id: string
  username: string
  link: string
  debriefer: Debriefer
  reportType: ReportType
  status: InvitationStatus
  expiredAt?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateInvitation = Omit<Invitation, 'id' | 'deletedAt'>
export type UpdateInvitation = Omit<Invitation, 'id' | 'createdAt' | 'deletedAt'>
