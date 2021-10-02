// 投票項目の型
export type PollItems = {
  id: string
  title: string
}

// 調査項目のレスポスの型
// TODO: 適切な名前に変更（SurveyResultなど）
export type ResponseItem = {
  id: string
  title: string
  options: string[]
  results: Record<string, number>
}

// API呼び出し時のリクエストに必要なデータ（外部から渡す引数）の型
export type RequestData = string | undefined

// APIから返却されたレスポンスデータの型
export type ResponseData = PollItems | ResponseItem