import { DocumentData, Timestamp } from 'firebase/firestore'
import { ReportLimitType } from '../enums/LimitType'
import { ReportType } from '../enums/ReportType'

export interface ReportLimit extends DocumentData {
  id: string
  reportType: ReportType
  limitType: ReportLimitType
  limit: number
  used: number
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateReportLimit = Omit<ReportLimit, 'id' | 'deletedAt'>
export type UpdateReportLimit = Omit<ReportLimit, 'id' | 'createdAt' | 'deletedAt'>
