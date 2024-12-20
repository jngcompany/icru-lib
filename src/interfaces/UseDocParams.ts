import { Collections } from "src/enums/Collections";

/**
 * 문서 조회를 위한 파라미터
 * @interface UseDocParams
 * @property {Collections} name - 컬렉션 이름
 * @property {string} id - 문서 ID
 * @property {boolean} enabled - 쿼리 활성 여부
 */
export interface UseDocParams {
  name: Collections;
  id: string;
  enabled?: boolean;
}
