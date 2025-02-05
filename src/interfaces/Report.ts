import { Diagnosis } from './Diagnosis'
/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { Debriefer, User } from '.'
import { ReportStatus } from '../enums/ReportStatus'
import { ReportType } from '../enums/ReportType'

/**
 * 리포트 인터페이스
 * @interface Report
 * @property {string} userId - 리포트 소유자의 사용자 ID
 * @property {string} diagnosisId - 연관된 진단의 ID
 * @property {string} organizationId - 소속 조직의 ID
 * @property {string} debrieferId - 디브리퍼의 ID
 * @property {string} downloadUrl - 리포트 다운로드 URL
 * @property {number} progress - 리포트 생성 진행률 (0-100)
 * @property {ReportType} type - 리포트 유형
 * @property {ReportStatus} status - 리포트 상태
 */
export interface Report extends DocumentData {
  id: string
  user: User
  Diagnosis: Diagnosis
  debriefer?: Debriefer
  downloadUrl: string
  progress: number
  type: ReportType
  status: ReportStatus
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateReport = Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
export type UpdateReport = Omit<Report, 'id' | 'createdAt' | 'deletedAt'>
export type RemoveReport = Pick<Report, 'deletedAt'>
