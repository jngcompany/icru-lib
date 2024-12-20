/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {Collections} from "../enums/Collections";

/**
 * 문서 삭제를 위한 파라미터
 * @interface UseDeleteDocParams
 * @param name {Collections} - 컬렉션 이름
 * @param enabled {boolean} - 쿼리 활성 여부
 */
export interface UseDeleteDocParams {
  name: Collections;
  enabled?: boolean;
}
