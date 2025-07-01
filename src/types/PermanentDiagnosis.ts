import { DocumentReference } from 'firebase/firestore'
import { ReportType } from '../enums/ReportType'
import { Debriefer } from './Debriefer'
import { CreateReportLimit, ReportLimit } from './ReportLimit'
import { UserDiagnosis } from './UserDiagnosis'

/**
 * 영구 진단을 나타내는 인터페이스
 * 고유 식별자, 이름, 링크, 보고서 유형 및 다양한 설정을 포함
 */
export interface PermanentDiagnosis {
  id: string
  name: string
  link: string
  autoReport: boolean
  isActive: boolean
  reportType: ReportType | ReportType[]
  reportLimit: ReportLimit | ReportLimit[]
  debriefer: Debriefer
  diagnoses: UserDiagnosis[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 영구 진단 생성 시 사용되는 타입
 * 자동 생성 필드와 참조 필드를 조정
 */
export type CreatePermanentDiagnosis = Pick<PermanentDiagnosis, 'name' | 'reportType' | 'autoReport' | 'isActive'> & {
  debriefer: DocumentReference | string
  reportLimit: CreateReportLimit[]
}

/**
 * 영구 진단 업데이트 시 사용되는 타입
 */
export type UpdatePermanentDiagnosis = Omit<PermanentDiagnosis, 'id' | 'createdAt' | 'deletedAt'>
