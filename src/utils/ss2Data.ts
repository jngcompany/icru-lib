import { DocumentReference, QueryDocumentSnapshot } from 'firebase-admin/firestore'

/**
 * 문서 스냅샷에서 데이터를 추출합니다.
 *
 * @template T - 데이터 타입
 * @param {QueryDocumentSnapshot} snapshot - 문서 스냅샷
 * @returns {T} - 데이터
 */
export function ss2Data<T>(snapshot: QueryDocumentSnapshot): T {
  let data = snapshot.data()

  data.id = snapshot.id
  for (const key in data) {
    if (data[key] instanceof Date) {
      data[key] = data[key].toISOString()
    }
    if (data[key] instanceof DocumentReference) {
      data[key] = data[key].path
    }
    if (Array.isArray(data[key])) {
      data[key] = data[key].map((item) => {
        if (item instanceof Date) {
          return item.toISOString()
        }
        if (item instanceof DocumentReference) {
          return item.path
        }

        return item
      })
    }
  }

  return data as T
}
