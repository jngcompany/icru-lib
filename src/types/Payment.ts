/**
 * 토스 결제 상태를 나타내는 인터페이스입니다.
 * @interface TossPaymentStatus
 * @property {string} status - 결제 상태 ('READY' | 'IN_PROGRESS' | 'WAITING_FOR_DEPOSIT' | 'DONE' | 'CANCELED' | 'PARTIAL_CANCELED' | 'ABORTED' | 'EXPIRED')
 */
export interface TossPaymentStatus {
  status:
    | 'READY'
    | 'IN_PROGRESS'
    | 'WAITING_FOR_DEPOSIT'
    | 'DONE'
    | 'CANCELED'
    | 'PARTIAL_CANCELED'
    | 'ABORTED'
    | 'EXPIRED'
}

/**
 * 결제 수단을 나타내는 인터페이스입니다.
 * @interface PaymentMethod
 * @property {string} type - 결제 수단 유형
 * @property {string} [provider] - 결제 제공자
 * @property {string} [number] - 결제 수단 번호
 * @property {number} [installmentPlanMonths] - 할부 개월 수
 */
export interface PaymentMethod {
  type: 'CARD' | 'VIRTUAL_ACCOUNT' | 'MOBILE_PHONE' | 'TRANSFER' | 'CULTURE_GIFT_CERTIFICATE' | 'BOOK_GIFT_CERTIFICATE'
  provider?: string
  number?: string
  installmentPlanMonths?: number
}

/**
 * 결제 요청을 나타내는 인터페이스입니다.
 * @interface PaymentRequest
 * @property {number} amount - 결제 금액
 * @property {string} orderId - 주문 ID
 * @property {string} orderName - 주문명
 * @property {string} customerName - 고객명
 * @property {string} successUrl - 결제 성공 시 리다이렉트 URL
 * @property {string} failUrl - 결제 실패 시 리다이렉트 URL
 * @property {string} diagnosisId - 진단 ID
 * @property {string} reportType - 보고서 유형
 */
export interface PaymentRequest {
  amount: number
  orderId: string
  orderName: string
  customerName: string
  successUrl: string
  failUrl: string
  diagnosisId: string
  reportType: string
}

/**
 * 결제 실패 정보를 나타내는 인터페이스입니다.
 * @interface PaymentFailure
 * @property {string} code - 실패 코드
 * @property {string} message - 실패 메시지
 * @property {string} orderId - 주문 ID
 */
export interface PaymentFailure {
  code: string
  message: string
  orderId: string
}

/**
 * 결제 정보를 나타내는 인터페이스입니다.
 * @interface Payment
 * @property {string} paymentKey - 결제 키
 * @property {string} orderId - 주문 ID
 * @property {string} orderName - 주문명
 * @property {number} amount - 결제 금액
 * @property {string} currency - 통화
 * @property {string} status - 결제 상태
 * @property {string} requestedAt - 결제 요청 시간
 * @property {string} [approvedAt] - 결제 승인 시간
 * @property {boolean} useEscrow - 에스크로 사용 여부
 * @property {PaymentMethod} method - 결제 수단
 * @property {string} customerName - 고객명
 * @property {string} diagnosisId - 진단 ID
 * @property {string} reportType - 보고서 유형
 * @property {PaymentFailure} [failureReason] - 실패 사유
 * @property {Object} [paymentData] - 추가 결제 데이터
 * @property {Object} [metadata] - 메타데이터
 * @property {Array<Object>} [cancels] - 취소 내역
 * @property {string} createdAt - 생성 시간
 * @property {string} updatedAt - 수정 시간
 */
export interface Payment {
  paymentKey: string
  orderId: string
  orderName: string
  amount: number
  currency: string
  status: TossPaymentStatus['status']
  requestedAt: string
  approvedAt?: string
  useEscrow: boolean
  method: PaymentMethod
  customerName: string
  diagnosisId: string
  reportType: string
  failureReason?: PaymentFailure
  paymentData?: {
    [key: string]: any
  }
  metadata?: {
    [key: string]: any
  }
  cancels?: Array<{
    cancelAmount: number
    cancelReason: string
    canceledAt: string
    refundStatus: 'PENDING' | 'COMPLETED' | 'FAILED'
    requestedBy: string
    approvedBy?: string
  }>
  createdAt: string
  updatedAt: string
}
