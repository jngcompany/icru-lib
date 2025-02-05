import { QuestionType } from '../enums'
import { UserAnswer } from '../types'

type ReadType = 'R' | 'E' | 'A' | 'D'
type ScoreSection = Record<ReadType, number>
type ScoreResult = Record<Extract<QuestionType, QuestionType.TEMPERAMENT | QuestionType.RESILIENCE>, ScoreSection>

/**
 * 주어진 사용자 답변 배열을 기반으로 점수를 계산합니다.
 *
 * @param answers - 사용자 답변 배열 (questionType 포함)
 * @returns TEMPERAMENT와 RESILIENCE 각각에 대한 R, E, A, D 점수를 포함하는 객체
 *
 * 사용자 답변 객체는 다음과 같은 구조를 가집니다:
 * {
 *   questionId: string,
 *   questionType: QuestionType,
 *   selections: {
 *     R: number | null,
 *     E: number | null,
 *     A: number | null,
 *     D: number | null
 *   }
 * }
 *
 * 각 선택지는 1에서 4까지의 값을 가질 수 있으며, 각 값에 따라 점수가 다르게 부여됩니다:
 * - 1: 4점
 * - 2: 3점
 * - 3: 2점
 * - 4: 1점
 */
export function diagnosisResultCalculateScore(
  answers: (UserAnswer & { questionType: QuestionType.TEMPERAMENT | QuestionType.RESILIENCE })[],
): ScoreResult {
  const scores: ScoreResult = {
    [QuestionType.TEMPERAMENT]: {
      R: 0,
      E: 0,
      A: 0,
      D: 0,
    },
    [QuestionType.RESILIENCE]: {
      R: 0,
      E: 0,
      A: 0,
      D: 0,
    },
  }

  answers.forEach((answer) => {
    Object.entries(answer.selections).forEach(([key, value]) => {
      const readType = key as ReadType
      if (typeof value === 'number') {
        switch (value) {
          case 1:
            scores[answer.questionType][readType] += 4
            break
          case 2:
            scores[answer.questionType][readType] += 3
            break
          case 3:
            scores[answer.questionType][readType] += 2
            break
          case 4:
            scores[answer.questionType][readType] += 1
            break
          default:
            break
        }
      }
    })
  })

  return scores
}
