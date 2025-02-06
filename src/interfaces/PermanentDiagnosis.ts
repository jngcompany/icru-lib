import { DocumentData, Timestamp } from 'firebase/firestore'
import { ReportType } from '../enums/ReportType'
import { Debriefer } from './Debriefer'
import { Diagnosis } from './Diagnosis'
import { ReportLimit } from './ReportLimit'

/**
 * 영구 진단을 나타내는 인터페이스.
 *
 * @extends DocumentData
 *
 * @property {string} id - 진단의 고유 식별자.
 * @property {string} name - 진단의 이름.
 * @property {string} link - 진단과 관련된 URL 링크.
 * @property {ReportType} reportType - 진단과 관련된 보고서 유형.
 * @property {boolean} autoReport - 보고서가 자동으로 생성되는지 여부.
 * @property {boolean} isActive - 진단이 현재 활성 상태인지 여부.
 * @property {ReportLimit} reportLimit - 보고서와 관련된 제한 사항.
 * @property {Debriefer} debriefer - 브리핑을 담당하는 사람.
 * @property {Diagnosis[]} diagnoses - 관련 진단 목록.
 * @property {Timestamp} createdAt - 진단이 생성된 타임스탬프.
 * @property {Timestamp} updatedAt - 진단이 마지막으로 업데이트된 타임스탬프.
 * @property {Timestamp | null} [deletedAt] - 진단이 삭제된 타임스탬프 (선택 사항), 삭제되지 않은 경우 null.
 */
export interface PermanentDiagnosis extends DocumentData {
  id: string
  name: string
  link: string
  reportType: ReportType
  autoReport: boolean
  isActive: boolean
  reportLimit: ReportLimit
  debriefer: Debriefer
  diagnoses: Diagnosis[]
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreatePermanentDiagnosis = Omit<PermanentDiagnosis, 'id' | 'deletedAt'>
export type UpdatePermanentDiagnosis = Omit<PermanentDiagnosis, 'id' | 'createdAt' | 'deletedAt'>
