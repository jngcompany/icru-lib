/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {PromotionStatus} from "../enums/PromotionStatus";

/**
 * 프로모션 인터페이스
 * @interface Promotion
 * @property {string} userId - 사용자 ID
 * @property {PromotionStatus} status - 상태 (NOT_STARTED: 생성만됨, IN_PROGRESS: 진행중, COMPLETED: 완료됨)
 * @property {object} answer - 답변
 * @property {string} answer.questionId - 질문 ID
 * @property {object} answer.answer - 답변
 * @property {object} answer.answer.1 - 1번 질문 답변
 * @property {number} answer.answer.1.R - 1번 질문 R 의 순서
 * @property {number} answer.answer.1.E - 1번 질문 E 의 순서
 * @property {number} answer.answer.1.A - 1번 질문 A 의 순서
 * @property {number} answer.answer.1.D - 1번 질문 D 의 순서
 */
export interface Promotion {
  userId: string;
  status: PromotionStatus;
  answer: {
    questionId: string;
    answer: {
      1: {R: number, E: number, A: number, D: number};
      2: {R: number, E: number, A: number, D: number};
      3: {R: number, E: number, A: number, D: number};
      4: {R: number, E: number, A: number, D: number};
      5: {R: number, E: number, A: number, D: number};
      6: {R: number, E: number, A: number, D: number};
      7: {R: number, E: number, A: number, D: number};
      8: {R: number, E: number, A: number, D: number};
      9: {R: number, E: number, A: number, D: number};
    },
    score: {R: number, E: number, A: number, D: number};
  }
}