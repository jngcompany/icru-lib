/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 컬렉션 이름 열거형
 * @enum {string}
 * @property {string} USER_DIAGNOSIS - 사용자 진단
 * @property {string} ORGANIZATIONS - 조직
 * @property {string} PRODUCTS - 제품
 * @property {string} DIAGNOSIS_QUESTIONS - 진단 질문
 * @property {string} MAIL - 메일
 * @property {string} REPORTS - 보고서
 * @property {string} PROMOTIONS - 프로모션
 */
export enum Collections {
  USER_DIAGNOSIS = 'userDiagnosis',
  ORGANIZATIONS = 'organizations',
  PRODUCTS = 'products',
  DIAGNOSIS_QUESTIONS = 'diagnosisQuestions',
  MAIL = 'mail',
  REPORTS = 'reports',
  PROMOTIONS = 'promotions',
}
