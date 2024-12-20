/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {Timestamp} from 'firebase/firestore'

export interface Doc<T> {
  id: string
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
  [key: string]: T | any
}
