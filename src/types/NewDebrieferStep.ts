import { DocumentReference } from 'firebase/firestore'

import { NewDebrieferOwnerType } from '../enums/NewDebrieferOwnerType'
import { NewDebrieferSteps } from '../enums/NewDebrieferSteps'
import { ContractType } from './../enums/ContractType'
import { Credit } from './Credit'
import { Debriefer } from './Debriefer'
import { License } from './License'
import { PermanentDiagnosis } from './PermanentDiagnosis'
import { User } from './User'

export type NewDebrieferStep = {
  id: string
  step: NewDebrieferSteps
  contractType: ContractType
  owner?: DocumentReference<User>
  ownerType?: NewDebrieferOwnerType
  debriefer?: DocumentReference<Debriefer>
  license?: DocumentReference<License>
  permanentDiagnosis?: DocumentReference<PermanentDiagnosis>
  credits?: DocumentReference<Credit>[]
  isCompleted: boolean
  createdAt: Date
  updatedAt: Date
}

export type CreateNewDebrieferStep = Pick<NewDebrieferStep, 'step' | 'contractType'>

export type UpdateNewDebrieferStep = Partial<CreateNewDebrieferStep> & {
  id: string
  isCompleted?: boolean
  owner?: string | DocumentReference<User>
  ownerType?: NewDebrieferOwnerType
  debriefer?: string | DocumentReference<Debriefer>
  license?: string | DocumentReference<License>
  permanentDiagnosis?: string | DocumentReference<PermanentDiagnosis>
  credits?: string | DocumentReference<Credit>[]
  createdAt?: Date
  updatedAt?: Date
}
