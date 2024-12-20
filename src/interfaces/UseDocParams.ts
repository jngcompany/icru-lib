import { Collections } from "src/enums/Collections";

/**
 * 문서 조회를 위한 파라미터
 * @interface UseDocParams
 * @property {Collections} name - 컬렉션 이름
 * @property {string} id - 문서 ID
 */
export interface UseDocParams {
  /** 컬렉션 이름 */
  name: Collections;
  /** 문서 ID */
  id: string;
}
