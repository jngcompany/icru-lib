import { UserType } from '../enums/UserType'
import { Gender } from '../enums/Gender'

export type User = {
  uid: string
  email: string
  displayName: string
  birthYear: number
  gender: Gender
  role: UserType
}
