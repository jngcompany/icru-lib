/**
 * 라이센스 만료 유형을 나타내는 열거형
 * @enum {string}
 * @property {string} TIMELIMIT - 기간제 만료 유형
 * @property {string} FIXED - 고정 만료일 유형
 */
export enum ExpireType {
  TIMELIMIT = 'TIMELIMIT',
  FIXED = 'FIXED',
}

export function toLabel(expireType: ExpireType): string {
  switch (expireType) {
    case ExpireType.TIMELIMIT:
      return '기간제 만료'
    case ExpireType.FIXED:
      return '고정 만료일'
    default:
      return '알 수 없음'
  }
}
