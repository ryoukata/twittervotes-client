// APIから取得したデータの型
export type ApiData = {
  id: string
  title: string
};

// 投票項目の型
export type PollItem = ApiData & {
  id: string
  title: string
}