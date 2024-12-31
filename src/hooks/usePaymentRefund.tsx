import { doc, Firestore, Timestamp, updateDoc } from 'firebase/firestore'
import { Collections } from '../enums/Collections'

interface UsePaymentRefundProps {
  firestore: Firestore
}

interface RefundRequest {
  paymentKey: string
  cancelAmount: number
  cancelReason: string
  requestedBy: string
}

interface RefundApprovalRequest {
  paymentKey: string
  approvedBy: string
  cancelAmount: number
  cancelReason: string
  requestedBy: string
}

export const usePaymentRefund = ({ firestore }: UsePaymentRefundProps) => {
  const handlePaymentRefund = async (refundRequest: RefundRequest) => {
    try {
      const now = Timestamp.now()
      const docRef = doc(firestore, Collections.PAYMENTS, refundRequest.paymentKey)
      await updateDoc(docRef, {
        status: 'CANCELED',
        cancels: [{
          cancelAmount: refundRequest.cancelAmount,
          cancelReason: refundRequest.cancelReason,
          canceledAt: now,
          refundStatus: 'PENDING',
          requestedBy: refundRequest.requestedBy
        }],
        updatedAt: now
      })
    } catch (error) {
      console.error('환불 처리 에러:', error)
      throw error
    }
  }

  const handleRefundApproval = async (request: RefundApprovalRequest) => {
    try {
      const now = Timestamp.now()
      const docRef = doc(firestore, Collections.PAYMENTS, request.paymentKey)
      await updateDoc(docRef, {
        status: 'CANCELED',
        cancels: [{
          cancelAmount: request.cancelAmount,
          cancelReason: request.cancelReason,
          canceledAt: now,
          refundStatus: 'COMPLETED',
          requestedBy: request.requestedBy,
          approvedBy: request.approvedBy
        }],
        updatedAt: now
      })
    } catch (error) {
      console.error('환불 승인 처리 에러:', error)
      throw error
    }
  }

  return {
    handlePaymentRefund,
    handleRefundApproval
  }
} 