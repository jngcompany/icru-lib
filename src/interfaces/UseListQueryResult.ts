/**
 * 리스트 쿼리 훅의 결과 인터페이스
 * @interface UseListQueryResult
 * @param items {T[]} - 현재 페이지의 아이템 배열
 * @param page {number} - 현재 페이지 번호
 * @param pages {number} - 전체 페이지 수
 * @param total {number} - 전체 아이템 수
 * @param error {Error | null} - 에러 객체
 * @param fetch {(params: { page: number }) => Promise<void>} - 특정 페이지의 데이터를 가져오는 함수
 */
export interface UseListQueryResult<T> {
  /** 현재 페이지의 아이템 배열 */
  items: T[];
  /** 현재 페이지 번호 */
  page: number;
  /** 전체 페이지 수 */
  pages: number;
  /** 전체 아이템 수 */
  total: number;
  /** 에러 객체 */
  error: Error | null;
  /**
   * 특정 페이지의 데이터를 가져오는 함수
   * @param params.page 가져올 페이지 번호
   */
  fetch: (params: { page: number }) => Promise<void>;
}
