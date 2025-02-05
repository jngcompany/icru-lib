/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { DocumentData, Timestamp } from 'firebase/firestore'
import { ProductTarget } from '../enums/ProductTarget'
import { ProductType } from '../enums/ProductType'

export interface SubscriptionDiscount {
  discountType: 'PERCENTAGE' | 'FIXED'
  discountValue: number
}

/**
 * @description 상품 정보를 나타내는 타입
 * @property {string} id - 상품 아이디
 * @property {string} name - 상품 이름
 * @property {string} description - 상품 설명
 * @property {number} salesPrice - 실제 판매 가격
 * @property {number} creditPrice - 크레딧 가격
 * @property {ProductType} productType - 상품 타입 (구독형, 일회성)
 * @property {UserProfile} target - 타켓 사용자
 * @property {number} subscriptionMonths - 구독 기간 (개월) - 구독형 상품인 경우에만 사용
 * @property {SubscriptionDiscount} subscriptionDiscount - 구독 할인 정보 - 구독형 상품인 경우에만 사용
 * @property {Date} createdAt - 생성 일자
 * @property {Date} updatedAt - 업데이트 일자
 */
export interface Product extends DocumentData {
  id: string
  name: string
  description: string
  salesPrice: number
  creditPrice: number
  productType: ProductType
  target: ProductTarget
  isActive: boolean
  subscriptionMonths?: number
  subscriptionDiscount?: SubscriptionDiscount
  createdAt: Timestamp
  updatedAt: Timestamp
  deletedAt?: Timestamp | null
}

export type CreateProduct = Omit<Product, 'id' | 'deletedAt'>
export type UpdateProduct = Omit<Product, 'id' | 'createdAt' | 'deletedAt'>
export type RemoveProduct = Pick<Product, 'id' | 'deletedAt'>

/**
 * @description 판매 전략을 나타내는 타입
 * @property {string} id - 판매 전략 아이디
 * @property {string} productId - 대상 상품 아이디
 * @property {string} name - 판매 전략 이름
 * @property {string} description - 판매 전략 설명
 * @property {number} discountRate - 할인율 (%)
 * @property {number} discountPrice - 할인 금액
 * @property {Date} startDate - 판매 전략 시작일
 * @property {Date} endDate - 판매 전략 종료일
 * @property {boolean} isActive - 활성화 여부
 * @property {Date} createdAt - 생성일
 * @property {Date} updatedAt - 수정일
 */
export interface SaleStrategy {
  productId: string
  name: string
  description: string
  discountRate: number
  discountPrice: number
  startDate: Date
  endDate: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  id?: string
  productId: string
  userId: string
  startDate: Date
  endDate: Date
}

/**
 * @description 상품 구매 이력을 나타내는 타입
 * @property {string} id - 구매 이력 아이디
 * @property {string} productId - 구매한 상품 아이디
 * @property {string} paymentId - 결제 아이디
 * @property {string} userId - 구매자 아이디
 * @property {number} price - 구매 가격
 * @property {boolean} usedCredit - 크레딧 사용 여부
 * @property {Date} purchasedAt - 구매 일자
 */
export interface PurchaseHistory {
  productId: string
  paymentId: string
  userId: string
  price: number
  usedCredit: boolean
  purchasedAt: Date
}
