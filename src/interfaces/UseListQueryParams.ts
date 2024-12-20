/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {Collections} from "../enums/Collections";


/**
 * 리스트 쿼리 파라미터
 * @interface UseListQueryParams
 * @param name {Collections} - 컬렉션 이름
 * @param size {number} - 페이지 크기
 * @param fields {string[]} - 필드 목록
 * @param deleted {boolean} - 삭제된 문서 포함 여부
 * @param where {Object} - 쿼리 조건
 * @param enabled {boolean} - 쿼리 활성 여부
 */
export interface UseListQueryParams {
  name: Collections;
  size: number;
  fields?: string[];
  deleted?: boolean;
  where?: { field: string; operator: string; value: any }[];
  enabled?: boolean;
}
