/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'

/**
 * 주소 정보를 나타내는 인터페이스입니다.
 *
 * @interface Address
 * @extends DocumentData
 *
 * @property {string} id - 주소의 고유 식별자입니다.
 * @property {string} address - 기본 주소입니다.
 * @property {string} detailAddress - 상세 주소입니다.
 * @property {string} zipCode - 우편번호입니다.
 * @property {Timestamp} createdAt - 주소가 생성된 날짜와 시간입니다.
 * @property {Timestamp} updatedAt - 주소가 마지막으로 업데이트된 날짜와 시간입니다.
 * @property {Timestamp | null} [deletedAt] - 주소가 삭제된 날짜와 시간입니다. 선택적 속성으로 null일 수 있습니다.
 */
export interface Address extends DocumentData {
  id: string
  address: string
  detailAddress: string
  zipCode: string
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

/**
 * 새 주소를 생성하기 위한 타입을 나타냅니다.
 *
 * 이 타입은 Address 타입에서 'id'와 'deletedAt' 속성을 생략합니다.
 */
export type CreateAddress = Omit<Address, 'id' | 'deletedAt'>

/**
 * 주소 정보를 업데이트하기 위한 타입을 나타냅니다.
 *
 * 이 타입은 Address 타입에서 'id', 'createdAt', 'deletedAt' 속성을 생략합니다.
 */
export type UpdateAddress = Omit<Address, 'id' | 'createdAt' | 'deletedAt'>
