import { useCreateDoc } from './useCreateDoc'
import { Payment, PaymentRequest } from '../interfaces/Payment'
import { Firestore } from 'firebase/firestore'
import { loadTossPayments } from '@tosspayments/payment-sdk'
import { Collections } from '../enums/Collections'

interface UsePaymentProps {
  firestore: Firestore
  clientKey: string
}

interface TossError {
  code: string
  message: string
}

export const usePayment = ({ firestore, clientKey }: UsePaymentProps) => {
  const { mutate: createPaymentDoc } = useCreateDoc<Payment>({
    name: Collections.PAYMENTS,
    callback: (doc) => {
      console.log('Payment document created:', doc)
    }
  }, firestore)

  const handlePayment = async (paymentRequest: PaymentRequest) => {
    try {
      const tossPayments = await loadTossPayments(clientKey)
      const now = new Date().toISOString()
      
      // 결제 요청 문서 생성
      createPaymentDoc({
        paymentKey: '',
        orderId: paymentRequest.orderId,
        orderName: paymentRequest.orderName,
        amount: paymentRequest.amount,
        currency: 'KRW',
        status: 'READY',
        customerName: paymentRequest.customerName,
        diagnosisId: paymentRequest.diagnosisId,
        reportType: paymentRequest.reportType,
        requestedAt: now,
        useEscrow: false,
        method: {
          type: 'CARD'
        },
        createdAt: now,
        updatedAt: now
      })

      // 토스페이먼츠 결제 요청
      await tossPayments.requestPayment('CARD', {
        amount: paymentRequest.amount,
        orderId: paymentRequest.orderId,
        orderName: paymentRequest.orderName,
        customerName: paymentRequest.customerName,
        successUrl: paymentRequest.successUrl,
        failUrl: paymentRequest.failUrl
      })
    } catch (error) {
      console.error('결제 에러:', error)
      const now = new Date().toISOString()
      const tossError = error as TossError
      
      // 결제 실패 문서 업데이트
      createPaymentDoc({
        paymentKey: '',
        orderId: paymentRequest.orderId,
        orderName: paymentRequest.orderName,
        amount: paymentRequest.amount,
        currency: 'KRW',
        status: 'ABORTED',
        customerName: paymentRequest.customerName,
        diagnosisId: paymentRequest.diagnosisId,
        reportType: paymentRequest.reportType,
        requestedAt: now,
        useEscrow: false,
        method: {
          type: 'CARD'
        },
        failureReason: {
          code: tossError.code || 'UNKNOWN',
          message: tossError.message || '알 수 없는 오류가 발생했습니다.',
          orderId: paymentRequest.orderId
        },
        createdAt: now,
        updatedAt: now
      })
      throw error
    }
  }

  return {
    handlePayment
  }
} 