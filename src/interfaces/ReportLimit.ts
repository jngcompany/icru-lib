import { DocumentData, Timestamp } from 'firebase/firestore'
import { ReportLimitType } from '../enums/LimitType'
import { ReportType } from '../enums/ReportType'

/**
 * 리포트 제한 설정을 나타내는 인터페이스
 * @property {string} id - 리포트 제한 설정의 고유 식별자
 * @property {ReportType} reportType - 리포트 유형 (베이직 프리미엄)
 * @property {ReportLimitType} limitType - 제한 유형 (연간, 월간, 일간)
 * @property {number} limit - 최대 제한 값
 * @property {number} used - 현재 사용된 값
 * @property {Timestamp} createdAt - 생성 일시
 * @property {Timestamp} updatedAt - 수정 일시
 * @property {Timestamp | null} deletedAt - 삭제 일시 (옵션)
 * @extends DocumentData - Firestore 문서 데이터 타입을 확장
 */
export interface ReportLimit extends DocumentData {
  /** 리포트 제한 설정의 고유 식별자 */
  id: string
  /** 리포트 유형 */
  reportType: ReportType
  /** 제한 유형 */
  limitType: ReportLimitType
  /** 최대 제한 값 */
  limit: number
  /** 현재 사용된 값 */
  used: number

  /** 생성 일시 */
  createdAt: Timestamp
  /** 수정 일시 */
  updatedAt: Timestamp
  /** 삭제 일시 (선택적) */
  deletedAt?: Timestamp | null
}

/**
 * 리포트 제한 생성 시 사용되는 타입
 * ReportLimit에서 id와 deletedAt을 제외한 타입
 * @typedef {Omit<ReportLimit, 'id' | 'deletedAt'>} CreateReportLimit
 */
export type CreateReportLimit = Omit<ReportLimit, 'id' | 'deletedAt'>

/**
 * 리포트 제한 수정 시 사용되는 타입
 * ReportLimit에서 id, createdAt, deletedAt을 제외한 타입
 * @typedef {Omit<ReportLimit, 'id' | 'createdAt' | 'deletedAt'>} UpdateReportLimit
 */
export type UpdateReportLimit = Omit<ReportLimit, 'id' | 'createdAt' | 'deletedAt'>
