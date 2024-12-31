import { doc, Firestore, Timestamp, updateDoc } from 'firebase/firestore'
import { Collections } from '../enums/Collections'

interface UsePaymentSuccessProps {
  firestore: Firestore
}

export const usePaymentSuccess = ({ firestore }: UsePaymentSuccessProps) => {
  const handlePaymentSuccess = async (paymentKey: string, orderId: string, amount: number) => {
    try {
      const now = Timestamp.now()
      const docRef = doc(firestore, Collections.PAYMENTS, orderId)
      await updateDoc(docRef, {
        paymentKey,
        amount,
        status: 'DONE',
        approvedAt: now,
        updatedAt: now
      })
    } catch (error) {
      console.error('결제 성공 처리 에러:', error)
      throw error
    }
  }

  return {
    handlePaymentSuccess
  }
} 