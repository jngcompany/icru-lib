export enum FormActionType {
  SET_VALUE = 'SET_VALUE',
  SET_ERROR = 'SET_ERROR',
}
export interface FormAction<T> {
  type: FormActionType
  field: keyof T
  value?: any
  error?: string | null
}

export type FormReducer<T> = (state: T, action: FormAction<T>) => T

export function formReducer<T>(state: T, action: FormAction<T>): T {
  switch (action.type) {
    case FormActionType.SET_VALUE:
      return {
        ...state,
        [action.field]: {
          ...state[action.field as keyof T],
          value: action.value,
        },
      }
    case FormActionType.SET_ERROR:
      return {
        ...state,
        [action.field]: {
          ...state[action.field as keyof T],
          error: action.error,
        },
      }
    default:
      return state
  }
}
