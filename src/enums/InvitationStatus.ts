/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

/**
 * 초대 상태를 나타내는 열거형
 * @enum {string}
 * @property {string} INVITED - 초대됨
 * @property {string} PROGRESSING - 진행 중
 * @property {string} COMPLETED - 완료됨
 */
export enum InvitationStatus {
  INVITED = 'INVITED',
  PROGRESSING = 'PROGRESSING',
  COMPLETED = 'COMPLETED',
}
