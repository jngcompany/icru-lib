/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { Gender } from '../enums/Gender'
import { UserType } from '../enums/UserType'

export interface User extends DocumentData {
  id: string
  uid: string
  isAnonymous: boolean
  email: string
  displayName: string | null
  birthYear: number | null
  gender: Gender | null
  role: UserType
  phoneNumber: string | null
  photoURL: string | null
  metadata: {
    creationTime: string
    lastSignInTime: string
  }
  providerData: Array<{
    displayName: string | null
    email: string
    phoneNumber: string | null
    photoURL: string | null
    providerId: string
    uid: string
  }>
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateUser = Omit<User, 'id' | 'deletedAt'>
export type UpdateUser = Omit<User, 'id' | 'createdAt' | 'deletedAt'>
