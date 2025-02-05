import { DocumentData, Timestamp } from 'firebase/firestore'
import { ContractType } from '../enums/ContractType'
import { Address } from './Address'
import { Credit } from './Credit'
import { License } from './License'
import { ReportLimit } from './ReportLimit'
import { User } from './User'

/**
 * 디브리퍼 인터페이스
 * @interface Debriefer
 * @property {User} owner - 디브리퍼의 소유자
 * @property {User[]} members - 디브리퍼에 속한 멤버들
 * @property {License} license - 디브리퍼의 라이선스 정보
 * @property {ContractType} contractType - 계약 유형
 * @property {ReportLimit[]} reportLimits - 리포트 제한 설정
 * @property {Credit[]} credits - 크레딧 내역
 * @property {number} totalCredits - 총 크레딧 수
 * @property {Address} address - 주소 정보
 * @property {Contractor} contractor - 계약자 정보
 */
export interface Debriefer extends DocumentData {
  id: string
  owner: User
  members: User[]
  license: License
  contractType: ContractType
  reportLimits: ReportLimit[]
  credits: Credit[]
  address: Address
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateDebriefer = Omit<Debriefer, 'id' | 'deletedAt'>

export type UpdateDebriefer = Omit<Debriefer, 'id' | 'createdAt' | 'deletedAt'>
