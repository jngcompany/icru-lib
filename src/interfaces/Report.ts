/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */


import { ReportType } from "../enums/ReportType";
import {ReportStatus} from "../enums/ReportStatus";

/**
 * 리포트 인터페이스
 * @interface Report
 * @property {string} id - 리포트의 고유 식별자
 * @property {string} userId - 리포트 소유자의 사용자 ID
 * @property {string} diagnosisId - 연관된 진단의 ID
 * @property {string} organizationId - 소속 조직의 ID
 * @property {string} debrieferId - 디브리퍼의 ID
 * @property {string} downloadUrl - 리포트 다운로드 URL
 * @property {number} progress - 리포트 생성 진행률 (0-100)
 * @property {ReportType} type - 리포트 유형
 * @property {ReportStatus} status - 리포트 상태
 */
export interface Report {
  id: string;
  userId: string;
  diagnosisId: string;
  organizationId: string;
  debrieferId: string;
  downloadUrl: string;
  progress: number;
  type: ReportType;
  status: ReportStatus;
}