import { ExpireType } from '../enums/ExpireType'

/**
 * 라이센스 정보를 나타내는 인터페이스
 * 라이센스 번호, 만료 일자, 만료 유형 등 포함
 */
export interface License {
  id: string
  number: string
  expirationDate?: Date | null
  expired: boolean
  expireType: ExpireType
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 라이센스 생성 시 사용되는 타입
 */
export type CreateLicense = Pick<License, 'number' | 'expirationDate' | 'expireType'>
