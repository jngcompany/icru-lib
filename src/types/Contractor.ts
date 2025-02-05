/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { Address } from '../interfaces/Address'
import { Debriefer } from '../interfaces/Debriefer'
import { User } from '../interfaces/User'

export interface Contractor {
  id?: string
  name: string
  businessNumber: string
  representative: string
  phone: string
  email: string
  address: Address
  createdBy?: User
  updatedBy?: User
  createdAt?: Date
  updatedAt?: Date
  debriefer?: Debriefer
}
