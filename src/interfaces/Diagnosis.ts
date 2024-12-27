/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {ActionerSubType, DetectorSubType, EmotionerSubType, Gender, MainType, RevolutionerSubType} from '../enums'
import { DiagnosisStatus } from '../enums'
import { Question } from './Question'
import { Doc } from './Doc'

/**
 * 사용자의 답변을 나타내는 인터페이스
 * @interface UserAnswer
 * @extends {Answer}
 * @property {AnswerType[] | boolean} selections - 사용자가 선택한 답변들 또는 boolean 값
 */
export interface UserAnswer {
  questionId: string
  selections: {
    R: number | boolean | null
    E: number | boolean | null
    A: number | boolean | null
    D: number | boolean | null
  }
}

/**
* 진단을 나타내는 인터페이스입니다.
* 이 인터페이스는 사용자, 그들의 응답, 점수 및 분류와 관련된 진단 검토, 평가 또는 평가를 나타내는 구조를 정의합니다.

* 속성:
*
* @property userId - 진단과 관련된 사용자의 고유 식별자입니다.
* @property isAnonymous - 사용자의 신원이 익명인지 여부를 나타내는 플래그입니다.
* @property userDisplayName - 진단에 참여한 사용자의 표시 이름입니다.
* @property userGender - Gender 열거형 값으로 표현된 사용자의 성별입니다.
* @property userBirthYear - 사용자의 출생 연도입니다.
* @property debrieferId - 브리핑을 수행하는 개인의 고유 식별자입니다(선택 사항).
* @property debrieferDisplayName - 브리퍼의 표시 이름입니다(선택 사항).
* @property organizationId - 관련 조직의 고유 식별자입니다(선택 사항).
* @property organizationName - 관련 조직의 이름입니다(선택 사항).
* @property status - DiagnosisStatus 열거형 값으로 표현된 진단의 상태입니다.
* @property score - 다양한 범주에서 점수를 포함하는 객체입니다. 구체적으로:
* - R: "R" 범주의 점수.
* - E: "E" 범주의 점수.
* - A: "A" 범주의 점수.
* - D: "D" 범주의 점수.
*
* @property case - 진단의 분류를 정의하는 객체입니다. 포함:
* - mainType: MainType 열거형 값으로 표현된 진단의 주요 유형.
* - subType: RevolutionerSubType, EmotionerSubType, ActionerSubType 또는 DetectorSubType 열거형 중 하나의 특정 하위 유형으로 표현된 진단의 하위 유형.
*
* @property questions - 진단과 관련된 질문을 나타내는 객체 배열입니다. 각 객체는 다음을 포함합니다:
* - id: 질문의 고유 식별자.
* - step: 질문의 단계 또는 순서.
* 또는 문서 참조, Doc<Question>로 표현된 객체 배열을 포함할 수 있습니다.
*
* @property answers - 진단에 대한 사용자 응답 배열입니다. 각 요소는 UserAnswer 유형의 객체를 나타냅니다.
*/
export interface Diagnosis {
  userId: string
  isAnonymous: boolean
  isFirst: boolean
  userDisplayName: string
  userGender: Gender
  userBirthYear: number
  debrieferId?: string | null
  debrieferDisplayName?: string | null
  organizationId?: string | null
  organizationName?: string | null
  status: DiagnosisStatus
  score: {
    R: number
    E: number
    A: number
    D: number
  }
  case: {
    mainType: MainType,
    subType: RevolutionerSubType | EmotionerSubType | ActionerSubType | DetectorSubType
  }
  questions: { id: string; step: number }[] | Doc<Question>[]
  answers: UserAnswer[]
}
