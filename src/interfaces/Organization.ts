/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { User } from './User'

export const COLLECTION_NAME = 'organizations'

/**
 * 조직의 소유자를 나타내는 타입입니다.
 *
 * @property {boolean} isOwner - 소유자 여부를 나타냅니다.
 */
export type OrganizationOwner = User & {
  isOwner: boolean
}

/**
 * 조직의 사용자를 나타내는 타입입니다.
 *
 * @property {boolean} isLeader - 리더 여부를 나타냅니다.
 * @property {boolean} needsInvitation - 초대 여부를 나타냅니다.
 * @property {string} invitationLink - 사용자의 초대 링크입니다.
 * @property {string} invitationLanguage - 초대 언어입니다.
 * @property {boolean} isInvited - 초대 여부를 나타냅니다.
 */
export type OrganizationUser = User & {
  isLeader: boolean
  needsInvitation: boolean
  invitationLink?: string
  invitationLanguage?: 'ko' | 'en'
  isInvited: boolean
}

/**
 * 조직을 나타내는 타입입니다.
 *
 * @property {string} id - 조직의 고유 식별자입니다.
 * @property {string} name - 조직의 이름입니다.
 * @property {string} description - 조직의 설명입니다.
 * @property {string} createdAt - 조직이 생성된 날짜와 시간입니다.
 * @property {string} updatedAt - 조직이 마지막으로 수정된 날짜와 시간입니다.
 * @property {OrganizationOwner} owner - 조직의 소유자 정보입니다.
 * @property {OrganizationUser[]} users - 조직에 속한 사용자들의 목록입니다.
 */
export interface Organization {
  name: string
  description: string
  createdAt: string
  updatedAt: string
  owner: OrganizationOwner
  users: OrganizationUser[]
}
