import { DocumentData, Timestamp } from 'firebase/firestore'
import { Diagnosis } from './Diagnosis'
import { User } from './User'

/**
 * 진단 그룹을 나타내는 인터페이스입니다.
 *
 * @interface DiagnosisGroup
 * @extends DocumentData
 *
 * @property {string} id - 진단 그룹의 고유 식별자입니다.
 * @property {string} name - 진단 그룹의 이름입니다.
 * @property {string} description - 진단 그룹에 대한 설명입니다.
 * @property {User} leader - 진단 그룹의 리더입니다.
 * @property {User[]} members - 진단 그룹의 멤버들입니다.
 * @property {Diagnosis[]} diagnoses - 진단 그룹에 속한 진단 목록입니다.
 * @property {DiagnosisGroup[]} subGroups - 하위 진단 그룹 목록입니다.
 * @property {Timestamp} createdAt - 진단 그룹이 생성된 시간입니다.
 * @property {Timestamp} updatedAt - 진단 그룹이 마지막으로 업데이트된 시간입니다.
 * @property {Timestamp | null} [deletedAt] - 진단 그룹이 삭제된 시간입니다. 선택적 속성입니다.
 */
export interface DiagnosisGroup extends DocumentData {
  id: string
  name: string
  description: string
  leader: User
  members: User[]
  diagnoses: Diagnosis[]
  subGroups: DiagnosisGroup[]
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

/**
 * 진단 그룹을 생성하기 위한 타입입니다.
 *
 * 이 타입은 DiagnosisGroup 타입에서 'id'와 'deletedAt' 속성을 생략합니다.
 */
export type CreateDiagnosisGroup = Omit<DiagnosisGroup, 'id' | 'deletedAt'>

/**
 * 진단 그룹을 업데이트하기 위한 타입입니다.
 *
 * 이 타입은 DiagnosisGroup 타입에서 'id', 'createdAt', 'deletedAt' 속성을 생략합니다.
 */
export type UpdateDiagnosisGroup = Omit<DiagnosisGroup, 'id' | 'createdAt' | 'deletedAt'>
