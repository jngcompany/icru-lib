/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {Collections} from "../enums/Collections";

import {Doc} from "./Doc";

/**
 * 문서 생성을 위한 파라미터
 * @interface UseCreateDocParams
 * @param name {Collections} - 컬렉션 이름  
 * @param enabled {boolean} - 쿼리 활성 여부
 * @param callback {Function} - 문서 생성 후 호출될 콜백 함수
 */
export interface UseCreateDocParams<T> {
  name: Collections;
  enabled?: boolean;
  callback?: (doc: Doc<T>) => void;
}
