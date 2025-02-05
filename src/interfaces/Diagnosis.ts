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
import { User } from './User'

/**
 * 진단 정보를 나타내는 인터페이스입니다.
 *
 * @interface Diagnosis
 * @extends DocumentData
 *
 * @property {string} id - 진단의 고유 식별자입니다.
 * @property {User} [user] - 진단을 받은 사용자 정보입니다.
 * @property {boolean} isAnonymous - 익명 여부를 나타냅니다.
 * @property {boolean} isFirst - 첫 번째 진단 여부를 나타냅니다.
 * @property {Debriefer} [debriefer] - 디브리퍼 정보입니다.
 * @property {DiagnosisStatus} status - 진단 상태를 나타냅니다.
 * @property {Object} scores - 진단 점수입니다.
 * @property {Object} scores.TEMPERAMENT - 기질 점수입니다.
 * @property {number} scores.TEMPERAMENT.R - 기질 점수 R입니다.
 * @property {number} scores.TEMPERAMENT.E - 기질 점수 E입니다.
 * @property {number} scores.TEMPERAMENT.A - 기질 점수 A입니다.
 * @property {number} scores.TEMPERAMENT.D - 기질 점수 D입니다.
 * @property {Object} scores.RESILIENCE - 회복력 점수입니다.
 * @property {number} scores.RESILIENCE.R - 회복력 점수 R입니다.
 * @property {number} scores.RESILIENCE.E - 회복력 점수 E입니다.
 * @property {number} scores.RESILIENCE.A - 회복력 점수 A입니다.
 * @property {number} scores.RESILIENCE.D - 회복력 점수 D입니다.
 * @property {Object} [case] - 진단 케이스 정보입니다.
 * @property {MainType} case.mainType - 주요 유형입니다.
 * @property {RevolutionerSubType | EmotionerSubType | ActionerSubType | DetectorSubType} case.subType - 하위 유형입니다.
 * @property {(Array<{ id: string; step: number }> | Question[])} [questions] - 질문 목록입니다.
 * @property {UserAnswer[]} [answers] - 사용자 답변 목록입니다.
 * @property {Invitation} [invitation] - 초대 정보입니다.
 * @property {Timestamp} createdAt - 생성 일시입니다.
 * @property {Timestamp} updatedAt - 수정 일시입니다.
 * @property {(Timestamp | null)} [deletedAt] - 삭제 일시입니다.
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
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateDiagnosis = Omit<Diagnosis, 'id' | 'deletedAt'>
export type UpdateDiagnosis = Omit<Diagnosis, 'id' | 'createdAt' | 'deletedAt'>
