/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { Gender } from '../enums/Gender'
import { UserType } from '../enums/UserType'

/**
 * 사용자 정보를 나타내는 인터페이스
 * 사용자의 기본 정보, 인증 정보, 프로필 데이터 포함
 */
export interface User {
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
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 사용자 생성 시 사용되는 타입
 */
export type CreateUser = Pick<
  User,
  'email' | 'displayName' | 'phoneNumber' | 'gender' | 'birthYear' | 'isAnonymous' | 'role'
> & {
  password: string
}

/**
 * 사용자 업데이트 시 사용되는 타입
 */
export type UpdateUser = Omit<User, 'id' | 'createdAt' | 'deletedAt'>
