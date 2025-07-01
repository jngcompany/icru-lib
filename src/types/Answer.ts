/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import { AnswerType } from './../enums/AnswerType'

/**
 * 답변을 나타내는 타입
 * 한국어와 영어 텍스트, 답변 유형 포함
 */
export type Answer = {
  id?: string
  text: {
    ko: string
    en: string
  }
  read: AnswerType
}
