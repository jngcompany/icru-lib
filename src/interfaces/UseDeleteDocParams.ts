import { Collections } from "src/enums/Collections";

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
