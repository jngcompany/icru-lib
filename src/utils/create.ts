import { Timestamp } from 'firebase/firestore'

/**
 * 주어진 데이터를 기반으로 객체를 생성합니다.
 *
 * @template T - 생성할 데이터의 타입
 * @param {T} data - 생성할 데이터 객체
 * @returns {Omit<T, 'id'> & { createdAt: Timestamp, updatedAt: Timestamp }} 생성된 데이터 객체
 */
export function create<T>(data: any): Omit<T, 'id'> & { createdAt: Timestamp; updatedAt: Timestamp } {
  const { id, ...rest } = data as any
  return {
    ...rest,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  }
}
