import { ContractType } from '../enums/ContractType'
import { Address } from './Address'
import { Credit } from './Credit'
import { License } from './License'
import { ReportLimit } from './ReportLimit'
import { User } from './User'

/**
 * 디브리퍼 정보를 나타내는 인터페이스
 * 소유자, 멤버, 라이선스, 계약유형, 보고서 제한 및 크레딧 정보 포함
 */
export interface Debriefer {
  id: string
  displayName: string
  owner: User
  members: User[]
  license: License
  address: Address
  contractType: ContractType
  businessNumber?: string
  reportLimits?: ReportLimit[]
  credits?: Credit[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 디브리퍼 생성 시 사용되는 타입
 * 자동 생성 필드와 참조 필드를 조정
 */
export type CreateDebriefer = Pick<Debriefer, 'displayName' | 'contractType' | 'address'> & {
  businessNumber?: string
  rrn?: string // 개인형 주민등록번호
}

/**
 * 디브리퍼 업데이트 시 사용되는 타입
 */
export type UpdateDebriefer = Omit<Debriefer, 'id' | 'createdAt' | 'deletedAt'>
