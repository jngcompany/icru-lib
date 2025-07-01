/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { ProductTarget } from '../enums/ProductTarget'
import { ProductType } from '../enums/ProductType'

/**
 * 구독 할인 정보를 나타내는 인터페이스
 */
export interface SubscriptionDiscount {
  discountType: 'PERCENTAGE' | 'FIXED'
  discountValue: number
}

/**
 * 상품 정보를 나타내는 인터페이스
 * 이름, 설명, 가격, 타입, 대상, 구독 관련 정보 포함
 */
export interface Product {
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
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

/**
 * 상품 생성 시 사용되는 타입
 */
export type CreateProduct = Omit<Product, 'id' | 'deletedAt'>

/**
 * 상품 업데이트 시 사용되는 타입
 */
export type UpdateProduct = Omit<Product, 'id' | 'createdAt' | 'deletedAt'>

/**
 * 상품 삭제 시 사용되는 타입
 */
export type RemoveProduct = Pick<Product, 'id' | 'deletedAt'>

/**
 * 판매 전략을 나타내는 인터페이스
 * 이름, 할인 정보, 적용 기간 등 포함
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

/**
 * 구독 정보를 나타내는 인터페이스
 */
export interface Subscription {
  id?: string
  productId: string
  userId: string
  startDate: Date
  endDate: Date
}

/**
 * 상품 구매 이력을 나타내는 인터페이스
 */
export interface PurchaseHistory {
  productId: string
  paymentId: string
  userId: string
  price: number
  usedCredit: boolean
  purchasedAt: Date
}
