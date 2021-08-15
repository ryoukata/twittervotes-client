import { type } from "os";

// 投票項目の型
export type PollItems = {
  id: string
  title: string
}

// 調査項目作成後のリダイレクト先
export type DetailPathOfSurveyItem = {
  location: string
}

// APIレスポンスの型
export type ResponseData = PollItems | DetailPathOfSurveyItem;