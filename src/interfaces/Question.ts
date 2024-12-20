import { QuestionType } from '../enums/QuestionType'
import { Answer } from './Answer'

/**
 * 질문을 나타냅니다.
 *
 * @typedef {Object} Question
 * @property {string} id - 질문의 고유 식별자.
 * @property {string} content - 질문의 내용.
 * @property {string} createdAt - 질문이 생성된 날짜 및 시간.
 * @property {string} updatedAt - 질문이 마지막으로 업데이트된 날짜 및 시간.
 * @property {string} [deletedAt] - 질문이 삭제된 날짜 및 시간 (해당되는 경우).
 * @property {Answer[]} [anwsers] - 질문과 관련된 답변 목록.
 * @property {number} version - 질문의 버전 번호.
 * @property {boolean} isFirst - 이것이 첫 번째 질문인지 여부를 나타냅니다.
 */
export type Question = {
  question: {
    ko: string
    en: string
  }
  answers?: Answer[]
  type: QuestionType
}
