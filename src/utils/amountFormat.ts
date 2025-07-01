/**
 * 문자열 형태의 금액을 입력받아 천 단위로 쉼표를 추가하여 포맷팅합니다.
 * @param amount - 문자열 형태의 금액을 입력받아 천 단위로 쉼표를 추가하여 포맷팅합니다.
 * @returns - 포맷팅된 문자열 형태의 금액을 반환합니다.
 */
export function amountFormat(amount: string) {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
