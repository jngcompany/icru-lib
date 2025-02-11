import { DocumentData, Timestamp } from 'firebase/firestore'
import {
  ActionerSubType,
  DetectorSubType,
  EmotionerSubType,
  MainType,
  RevolutionerSubType,
} from '../enums/DiagnosisCase'
import { DiagnosisStatus } from '../enums/DiagnosisStatus'
import { UserAnswer } from '../types/UserAnswer'
import { Debriefer } from './Debriefer'
import { DiagnosisQuestion } from './DiagnosisQuestion'
import { Invitation } from './Invitation'
import { PermanentDiagnosis } from './PermanentDiagnosis'
import { User } from './User'

/**
 * 진단 인터페이스
 * @interface Diagnosis
 * @extends {DocumentData}
 * @property {string} id - 진단의 고유 식별자.
 * @property {User} user - 진단을 수행한 사용자.
 * @property {boolean} isAnonymous - 익명 진단 여부.
 * @property {boolean} isFirst - 첫 번째 진단 여부.
 * @property {Debriefer} debriefer - 디브리퍼.
 * @property {DiagnosisStatus} status - 진단 상태.
 * @property {{ TEMPERAMENT: { R: number; E: number; A: number; D: number }; RESILIENCE: { R: number; E: number; A: number; D: number }}} scores - 진단 점수.
 * @property {{ mainType: MainType; subType: RevolutionerSubType | EmotionerSubType | ActionerSubType | DetectorSubType }} case - 진단 케이스.
 * @property {DiagnosisQuestion[] | { id: string; step: number }[]} questions - 질문 목록.
 * @property {UserAnswer[]} answers - 사용자 답변 목록.
 * @property {Invitation} invitation - 초대장.
 * @property {PermanentDiagnosis} permanentDiagnosis - 영구 진단.
 * @property {Timestamp} createdAt - 생성일.
 * @property {Timestamp} updatedAt - 수정일.
 * @property {Timestamp | null} deletedAt - 삭제일.
 */
export interface Diagnosis extends DocumentData {
  id: string
  user?: User
  isAnonymous: boolean
  isFirst: boolean
  debriefer?: Debriefer
  status: DiagnosisStatus
  scores: {
    TEMPERAMENT: {
      R: number
      E: number
      A: number
      D: number
    }
    RESILIENCE: {
      R: number
      E: number
      A: number
      D: number
    }
  }
  case?: {
    mainType: MainType
    subType: RevolutionerSubType | EmotionerSubType | ActionerSubType | DetectorSubType
  }
  questions?: { id: string; step: number }[] | DiagnosisQuestion[]
  answers?: UserAnswer[]
  invitation?: Invitation
  permanentDiagnosis?: PermanentDiagnosis
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateDiagnosis = Omit<Diagnosis, 'id' | 'deletedAt'>
export type UpdateDiagnosis = Omit<Diagnosis, 'id' | 'createdAt' | 'deletedAt'>
