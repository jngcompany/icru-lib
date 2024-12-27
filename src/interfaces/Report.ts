/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */


import {ReportStatus} from "../enums/ReportStatus";

export interface Report {
  id: string;
  userId: string;
  diagnosisId: string;
  organizationId: string;
  debrieferId: string;
  downloadUrl: string;
  progress: number;
  status: ReportStatus;
}