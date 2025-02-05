import { Timestamp } from 'firebase/firestore'

/**
 * 주어진 데이터를 업데이트하고 `updatedAt` 속성을 현재 시간으로 설정합니다.
 *
 * @template T - 업데이트할 데이터의 타입
 * @param {T} data - 업데이트할 데이터 객체
 * @returns {Omit<T, 'id'> & { updatedAt: Timestamp }} 업데이트된 데이터 객체
 */
export function update<T>(data: any): Omit<T, 'id'> & { updatedAt: Timestamp } {
  const { id, ...rest } = data as any
  return {
    ...rest,
    updatedAt: Timestamp.now(),
  }
}
