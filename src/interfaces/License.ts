import { DocumentData, Timestamp } from 'firebase/firestore'
import { ExpireType } from '../enums/ExpireType'

/**
 * 라이센스 정보를 나타내는 인터페이스
 * @interface License
 * @property {string} id - 라이센스의 고유 식별자
 * @property {string} number - 라이센스 번호
 * @property {Date} [expirationDate] - 라이센스 만료일자 (선택사항)
 * @property {boolean} expired - 라이센스 만료 여부
 * @property {ExpireType} expireType - 라이센스 만료 유형
 */
export interface License extends DocumentData {
  id: string
  number: string
  expirationDate?: Timestamp | null
  expired: boolean
  expireType: ExpireType
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateLicense = Omit<License, 'id' | 'deletedAt'>
export type UpdateLicense = Omit<License, 'id' | 'createdAt' | 'deletedAt'>
