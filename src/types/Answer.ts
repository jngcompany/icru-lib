/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { AnswerType } from './../enums/AnswerType'

/**
 * 답변을 나타내는 타입입니다.
 *
 * @property {string} id - 답변의 고유 식별자입니다.
 * @property {string} content - 답변의 내용입니다.
 * @property {string} createdAt - 답변이 생성된 날짜와 시간입니다.
 * @property {string} updatedAt - 답변이 마지막으로 수정된 날짜와 시간입니다.
 * @property {string} [deletedAt] - 답변이 삭제된 날짜와 시간입니다. 선택적 속성입니다.
 * @property {number} version - 답변의 버전입니다.
 */
export type Answer = {
  id?: string
  text: {
    ko: string
    en: string
  }
  read: AnswerType
}
