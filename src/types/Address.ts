/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 주소 정보를 나타내는 인터페이스
 * 기본 주소, 상세 주소, 우편번호 등의 주소 정보 포함
 */
export interface Address {
  address: string
  detailAddress: string
  zipCode: string
}
