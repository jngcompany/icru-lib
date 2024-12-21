/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { UserType } from '../enums/UserType'
import { Gender } from '../enums/Gender'

export type User = {
  uid: string
  isAnonymous: boolean
  email: string
  displayName: string
  birthYear: number
  gender: Gender
  role: UserType
}
