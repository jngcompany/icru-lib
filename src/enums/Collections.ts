/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 컬렉션 이름 열거형
 * @enum {string}
 * @property {string} USER_DIAGNOSIS - 사용자 진단
 * @property {string} INVITATIONS - 초대장
 * @property {string} PERMANENT_DIAGNOSIS - 상설 진단
 * @property {string} GROUP_DIAGNOSIS - 그룹 진단
 * @property {string} PRODUCTS - 제품
 * @property {string} DIAGNOSIS_QUESTIONS - 진단 질문
 * @property {string} MAIL - 메일
 * @property {string} REPORTS - 보고서
 * @property {string} PROMOTIONS - 프로모션
 * @property {string} PAYMENTS - 결제
 * @property {string} SUBSCRIPTIONS - 구독
 * @property {string} PURCHASE_HISTORIES - 구매 이력
 * @property {string} USERS - 사용자
 */
export enum Collections {
  USER_DIAGNOSIS = 'userDiagnosis',
  INVITATIONS = 'invitations',
  PERMANENT_DIAGNOSIS = 'permanentDiagnosis',
  GROUP_DIAGNOSIS = 'groupDiagnosis',
  PRODUCTS = 'products',
  DIAGNOSIS_QUESTIONS = 'diagnosisQuestions',
  MAIL = 'mail',
  REPORTS = 'reports',
  PROMOTIONS = 'promotions',
  PAYMENTS = 'payments',
  SUBSCRIPTIONS = 'subscriptions',
  PURCHASE_HISTORIES = 'purchase_histories',
  USERS = 'users',
  DEBRIEFERS = 'debriefers',
  LICENSES = 'licenses',
  CREDITS = 'credits',
  REPORT_LIMITS = 'reportLimits',
  APPLY_DEBRIEFERS = 'applyDebriefers',
}
