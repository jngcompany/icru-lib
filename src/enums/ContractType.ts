/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 디브리퍼의 계약 형태를 나타내는 열거형
 * @enum {string}
 * @property {string} GENERAL - 일반형(개인형 포함)
 * @property {string} CORPORATE - 기업형
 */
export enum ContractType {
  GENERAL = 'GENERAL', // 일반형(개인형 포함)
  CORPORATE = 'CORPORATE',
  ADMIN = 'ADMIN',
}
