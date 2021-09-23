import { TupleType } from "typescript"

// 投票項目の型
export type PollItems = {
  id: string
  title: string
}

// 調査項目作成後のリダイレクト先
export type DetailPathOfSurveyItem = {
  location: string
}

// 調査項目のレスポスの型
export type ResponseItem = {
  id: string
  title: string
  options: string[]
  // results: Map<string, number>
  // results: {[key: string]: number}
  results: Record<string, number>
}