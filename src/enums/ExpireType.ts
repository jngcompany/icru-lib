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
