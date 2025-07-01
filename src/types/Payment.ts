/**
 * 토스 결제 상태를 나타내는 인터페이스
 */
export interface TossPaymentStatus {
  status: 'READY' | 'IN_PROGRESS' | 'WAITING_FOR_DEPOSIT' | 'DONE' | 'CANCELED' | 'PARTIAL_CANCELED' | 'ABORTED' | 'EXPIRED'
}

/**
 * 결제 수단을 나타내는 인터페이스
 */
export interface PaymentMethod {
  type: 'CARD' | 'VIRTUAL_ACCOUNT' | 'MOBILE_PHONE' | 'TRANSFER' | 'CULTURE_GIFT_CERTIFICATE' | 'BOOK_GIFT_CERTIFICATE'
  provider?: string
  number?: string
  installmentPlanMonths?: number
}

/**
 * 결제 요청을 나타내는 인터페이스
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
 * 결제 실패 정보를 나타내는 인터페이스
 */
export interface PaymentFailure {
  code: string
  message: string
  orderId: string
}

/**
 * 결제 정보를 나타내는 인터페이스
 * 결제 키, 주문 정보, 금액, 상태, 결제 수단 등 포함
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
