import { ReportLimitType } from '../enums/LimitType'
import { ReportType } from '../enums/ReportType'

/**
 * 리포트 제한 설정을 나타내는 인터페이스
 * 리포트 유형, 제한 유형, 최대 제한 값 등 포함
 */
export interface ReportLimit {
  id: string
  reportType: ReportType
  limitType: ReportLimitType
  endDate: Date
  limit: number
  used: [{ when: string; count: number }]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 리포트 제한 생성 시 사용되는 타입
 */
export type CreateReportLimit = Pick<ReportLimit, 'reportType' | 'limitType' | 'limit'> & {
  endDate: string
  used?: { when: string; count: number }[]
}

/**
 * 리포트 제한 수정 시 사용되는 타입
 */
export type UpdateReportLimit = Omit<ReportLimit, 'id' | 'createdAt' | 'deletedAt'>
