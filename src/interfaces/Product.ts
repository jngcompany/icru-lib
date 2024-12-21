/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { ProductType } from '../enums/ProductType'
import { ProductTarget } from '../enums/ProductTarget'

export const PRODUCT_COLLECTION = 'products'
export const SUBSCRIPTION_COLLECTION = 'subscriptions'
export const PURCHASE_HISTORY_COLLECTION = 'purchase_histories'
export const PAYMENT_COLLECTION = 'payments'

/**
 * @description 상품 정보를 나타내는 타입
 * @property {string} id - 상품 아이디
 * @property {string} name - 상품 이름
 * @property {string} description - 상품 설명
 * @property {number} salesPrice - 실제 판매 가격
 * @property {number} creditPrice - 크레딧 가격
 * @property {ProductType} productType - 상품 타입 (구독형, 일회성)
 * @property {UserProfile} target - 타켓 사용자
 * @property {Date} createdAt - 생성 일자
 * @property {Date} updatedAt - 업데이트 일자
 */
export interface Product {
  name: string
  description: string
  salesPrice: number
  creditPrice: number
  productType: ProductType
  target?: ProductTarget
}

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
  id?: string
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
  id?: string
  productId: string
  paymentId: string
  userId: string
  price: number
  usedCredit: boolean
  purchasedAt: Date
}

/**
 * @description 상품 결제 정보를 나타내는 타입
 * @property {string} id - 결제 아이디
 * @property {string} userId - 결제자 아이디
 * @property {number} amount - 결제 금액
 * @property {string} paymentMethod - 결제 방법
 * @property {Date} paidAt - 결제 일자
 */
export interface Payment {
  id?: string
  userId: string
  amount: number
  paymentMethod: string
  paidAt: Date
}
