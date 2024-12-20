import { Collections } from "src/enums/Collections";

import { Doc } from "./Doc";

/**
 * 문서 생성을 위한 파라미터
 * @interface UseCreateDocParams
 * @param name {Collections} - 컬렉션 이름  
 * @param callback {Function} - 문서 생성 후 호출될 콜백 함수
 */
export interface UseCreateDocParams<T> {
  name: Collections;
  callback?: (doc: Doc<T>) => void;
}
