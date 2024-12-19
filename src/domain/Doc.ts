import { Timestamp } from 'firebase/firestore'

export interface Doc<T> {
  id: string
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
  [key: string]: T | any
}
