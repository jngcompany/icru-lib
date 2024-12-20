/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {Collections} from "../enums/Collections";

/**
 * 문서 업데이트 파라미터 인터페이스
 * @interface UseUpdateDocParams
 * @param name {Collections} - 컬렉션 이름
 * @param enabled {boolean} - 쿼리 활성 여부
 */
export interface UseUpdateDocParams {
  name: Collections;
  enabled?: boolean;
}

