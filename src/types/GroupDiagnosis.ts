import { DocumentReference } from 'firebase/firestore'
import { DiagnosisGroupStatus } from '../enums/DiagnosisGroupStatus'
import { ReportType } from '../enums/ReportType'
import { CreditTransaction } from './CreditTransaction'
import { Debriefer } from './Debriefer'
import { User } from './User'
import { UserDiagnosis } from './UserDiagnosis'

/**
 * 진단 그룹을 나타내는 인터페이스
 * 그룹 진단에 관한 기본 정보 및 구성원, 상태, 기간 정보 포함
 */
export interface GroupDiagnosis {
  id: string
  name: string
  link: string
  autoReport: boolean
  debriefer: Debriefer
  reportType: ReportType
  count: number
  status: DiagnosisGroupStatus
  expiredAt?: Date
  creditTransactions: CreditTransaction[]
  diagnoses: UserDiagnosis[]
  members: User[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 진단 그룹 생성 시 사용되는 타입
 */
export type CreateGroupDiagnosis = Omit<
  GroupDiagnosis,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'leader' | 'debriefer'
> & {
  debriefer: DocumentReference
}

/**
 * 진단 그룹 업데이트 시 사용되는 타입
 */
export type UpdateDiagnosisGroup = Omit<GroupDiagnosis, 'id' | 'createdAt' | 'deletedAt'>

/**
 * 집단 진단의 목록을 나타내는 타입
 */
export type GroupDiagnosisListItem = Pick<GroupDiagnosis, 'id' | 'name' | 'status' | 'reportType' | 'createdAt'>
