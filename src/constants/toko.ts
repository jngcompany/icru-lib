import {
  ActionerSubType,
  DetectorSubType,
  EmotionerSubType,
  MainType,
  RevolutionerSubType,
} from '../enums/DiagnosisCase'
import { DiagnosisGroupStatus } from '../enums/DiagnosisGroupStatus'
import { DiagnosisStatus } from '../enums/DiagnosisStatus'
import { InvitationStatus } from '../enums/InvitationStatus'
import { ReportType } from '../enums/ReportType'

export const mainTypeKorean: { [key in MainType]: string } = {
  [MainType.REVOLUTIONER]: '창조가',
  [MainType.EMOTIONER]: '상담가',
  [MainType.ACTIONER]: '행동가',
  [MainType.DETECTOR]: '분석가',
}

// 서브 타입 한글 매핑
export const subTypeKorean = {
  [MainType.REVOLUTIONER]: {
    [RevolutionerSubType.REVOLUTIONER]: '창조가',
    [RevolutionerSubType.SHERPA]: '안내자',
    [RevolutionerSubType.MAVERICK]: '승부사',
    [RevolutionerSubType.ARTISAN]: '장인',
  },
  [MainType.EMOTIONER]: {
    [EmotionerSubType.EMOTIONER]: '상담가',
    [EmotionerSubType.CATALYST]: '촉진자',
    [EmotionerSubType.SPOKESPERSON]: '대변인',
    [EmotionerSubType.ORCHESTRATOR]: '조직자',
  },
  [MainType.ACTIONER]: {
    [ActionerSubType.ACTIONER]: '행동가',
    [ActionerSubType.INNOVATOR]: '혁명가',
    [ActionerSubType.KINGPIN]: '선도자',
    [ActionerSubType.GUARDIAN]: '보호자',
  },
  [MainType.DETECTOR]: {
    [DetectorSubType.DETECTOR]: '분석가',
    [DetectorSubType.RENOVATOR]: '쇄신가',
    [DetectorSubType.COORDINATOR]: '조정자',
    [DetectorSubType.DEVELOPER]: '개발자',
  },
}

export const diagnosisStatusKorean: { [key in DiagnosisStatus]: string } = {
  [DiagnosisStatus.NOT_STARTED]: '진단 미시작',
  [DiagnosisStatus.IN_PROGRESS]: '진단 진행중',
  [DiagnosisStatus.COMPLETED]: '진단 완료',
  [DiagnosisStatus.REVIEWED]: '진단 검토중',
}

export const reportTypeKorean: { [key in ReportType]: string } = {
  [ReportType.RESILIENCE]: '회복 탄력성',
  [ReportType.BASIC]: '베이직',
  [ReportType.PREMIUM]: '프리미엄',
}

export const invitationStatusKorean = {
  [InvitationStatus.INVITED]: '초대중',
  [InvitationStatus.PROGRESSING]: '진단 진행중',
  [InvitationStatus.COMPLETED]: '진단 완료',
}

export const groupDiagnosisStatusKorean = {
  [DiagnosisGroupStatus.NOT_STARTED]: '진단 미시작',
  [DiagnosisGroupStatus.IN_PROGRESS]: '진단 진행중',
  [DiagnosisGroupStatus.COMPLETED]: '진단 완료',
  [DiagnosisGroupStatus.EXPIRED]: '진단 만료',
}
