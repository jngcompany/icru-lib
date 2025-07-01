'use client'
import { ActionerSubType, DetectorSubType, EmotionerSubType, RevolutionerSubType } from '@/common/enums/DiagnosisCase'

export const subTypeColor = {
  // REVOLUTIONER TYPES
  [RevolutionerSubType.REVOLUTIONER]: '#C661F3',
  [RevolutionerSubType.SHERPA]: '#CE7CF5',
  [RevolutionerSubType.MAVERICK]: '#D697F7',
  [RevolutionerSubType.ARTISAN]: '#DEB2F9',

  // EMOTIONER TYPES
  [EmotionerSubType.EMOTIONER]: '#34B795',
  [EmotionerSubType.CATALYST]: '#4CC3A3',
  [EmotionerSubType.SPOKESPERSON]: '#64CFB1',
  [EmotionerSubType.ORCHESTRATOR]: '#7CDBBF',

  // ACTIONER TYPES
  [ActionerSubType.ACTIONER]: '#E86571',
  [ActionerSubType.INNOVATOR]: '#EC7F89',
  [ActionerSubType.KINGPIN]: '#F099A1',
  [ActionerSubType.GUARDIAN]: '#F4B3B9',

  // DETECTOR TYPES
  [DetectorSubType.DETECTOR]: '#4299F3',
  [DetectorSubType.RENOVATOR]: '#5CA6F4',
  [DetectorSubType.COORDINATOR]: '#76B3F5',
  [DetectorSubType.DEVELOPER]: '#90C0F6',
}
