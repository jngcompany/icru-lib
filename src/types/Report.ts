/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentReference } from 'firebase/firestore'

import { ReportStatus } from '../enums/ReportStatus'
import { ReportType } from '../enums/ReportType'
import { User } from './User'
import { UserDiagnosis } from './UserDiagnosis'

/**
 * 리포트 정보를 나타내는 인터페이스
 * 사용자 정보, 진단 정보, 다운로드 URL, 진행률, 상태 포함
 */
export interface Report {
  id: string
  user: User
  diagnosis: UserDiagnosis
  downloadUrl: string
  progress: number
  type: ReportType
  status: ReportStatus
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 리포트 생성 시 사용되는 타입
 * 자동 생성 필드와 참조 필드를 조정
 */
export type CreateReport = Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'user' | 'diagnosis'> & {
  user: DocumentReference
  diagnosis: DocumentReference
}

/**
 * 리포트 업데이트 시 사용되는 타입
 */
export type UpdateReport = Omit<Report, 'id' | 'createdAt' | 'deletedAt'>

/**
 * 리포트 삭제 시 사용되는 타입
 */
export type RemoveReport = Pick<Report, 'deletedAt'>
