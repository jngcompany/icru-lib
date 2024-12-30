/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {PromotionStatus} from "../enums";
import {UserAnswer} from "./Diagnosis";

/**
 * 프로모션 인터페이스
 * @interface Promotion
 * @property {string} userId - 사용자 ID
 * @property {PromotionStatus} status - 상태 (NOT_STARTED: 생성만됨, IN_PROGRESS: 진행중, COMPLETED: 완료됨)
 * @property {UserAnswer[]} answers - 사용자 답변
 * @property {Object} score - 점수
 */
export interface Promotion {
  userId: string;
  status: PromotionStatus;
  answers: UserAnswer[];
  score: {
    R: number;
    E: number;
    A: number;
    D: number;
  }
}