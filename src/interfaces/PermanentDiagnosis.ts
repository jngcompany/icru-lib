import { DocumentData, Timestamp } from 'firebase/firestore'
import { ReportType } from '../enums/ReportType'
import { Debriefer } from './Debriefer'
import { Diagnosis } from './Diagnosis'
import { ReportLimit } from './ReportLimit'

/**
 * 영구 진단을 나타내는 인터페이스입니다.
 * @interface PermanentDiagnosis
 * @property {string} name - 영구 진단의 이름입니다.
 * @property {string} link - 영구 진단의 링크입니다.
 * @property {ReportType} reportType - 영구 진단의 보고서 유형입니다.
 * @property {boolean} autoReport - 영구 진단의 자동 보고서 작성 여부입니다.
 * @property {Doc<ReportLimit>[]} reportLimit - 영구 진단의 보고서 제한 객체들의 배열입니다.
 * @property {Doc<Debriefer>} debriefer - 영구 진단의 디브리퍼 객체입니다.
 * @property {Doc<Diagnosis>[]} diagnoses - 영구 진단의 진단 객체들의 배열입니다.
 */
export interface PermanentDiagnosis extends DocumentData {
  id: string
  name: string
  link: string
  reportType: ReportType
  autoReport: boolean
  password: string
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
