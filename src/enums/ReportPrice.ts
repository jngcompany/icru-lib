import { ReportType } from './ReportType'

/**
 * 리포트 타입별 크레딧 가격을 정의하는 객체
 * @type {Record<ReportType, number>}
 * @property {number} BASIC - 기본 리포트의 크레딧 가격 (10,000 크레딧)
 * @property {number} PREMIUM - 프리미엄 리포트의 크레딧 가격 (30,000 크레딧)
 */
export const ReportPrice = {
  [ReportType.BASIC]: 10000,
  [ReportType.PREMIUM]: 30000,
  [ReportType.RESILIENCE]: 5000,
}
