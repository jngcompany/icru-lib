/**
 * 크레딧 거래 유형을 정의하는 열거형
 */

export enum CreditTransactionType {
  PURCHASE = 'PURCHASE', // 크레딧 구매
  SUBSCRIPTION_GRANT = 'SUBSCRIPTION_GRANT', // 구독을 통한 크레딧 지급
  ADMIN_GRANT = 'ADMIN_GRANT', // 관리자 지급
  USAGE = 'USAGE', // 크레딧 사용
  REFUND = 'REFUND', // 환불
  ADJUSTMENT = 'ADJUSTMENT', // 조정
  EXPIRY = 'EXPIRY',
}
