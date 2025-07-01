import { DiagnosisStatus } from '../enums/DiagnosisStatus'
import { Gender } from '../enums/Gender'
import { Debriefer } from './Debriefer'
import { DiagnosisQuestion } from './DiagnosisQuestion'
import { GroupDiagnosis } from './GroupDiagnosis'
import { Invitation } from './Invitation'
import { PermanentDiagnosis } from './PermanentDiagnosis'
import { User } from './User'

import {
  ActionerSubType,
  DetectorSubType,
  EmotionerSubType,
  MainType,
  RevolutionerSubType,
} from '../enums/DiagnosisCase'
import { UserAnswer } from './UserAnswer'

/**
 * 사용자 진단 정보를 나타내는 인터페이스
 * 진단 결과, 상태, 점수, 관련 정보를 포함
 */
export interface UserDiagnosis {
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
  diagnosisGroup?: GroupDiagnosis
  userBirthYear?: number
  userGender?: Gender
  userDisplayName?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 새 진단을 생성하기 위한 타입
 */
export type CreateDiagnosis = Omit<UserDiagnosis, 'id' | 'deletedAt'>

/**
 * 기존 진단을 업데이트하기 위한 타입
 */
export type UpdateDiagnosis = Omit<UserDiagnosis, 'id' | 'createdAt' | 'deletedAt'>

/**
 * 진단 히스토리 항목을 나타내는 타입
 */
export type DiagnosisHistory = Pick<UserDiagnosis, 'id' | 'status' | 'scores' | 'case' | 'createdAt' | 'updatedAt'> & {
  isCurrent: boolean
}

/**
 * 진단 데이터 조각 항목
 */
export interface DiagnosisSliceItem {
  name: string
  case?: {
    mainType?: MainType
    subType?: RevolutionerSubType | EmotionerSubType | ActionerSubType | DetectorSubType
  }
  score: {
    R: number
    E: number
    A: number
    D: number
  }
}

/**
 * 기질과 회복탄력성 데이터 조각 모음
 */
export interface DiagnosisSlice {
  temperements: DiagnosisSliceItem[]
  resiliences: DiagnosisSliceItem[]
}
