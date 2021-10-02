import {RequestData, ResponseData} from './DataType';

// API呼び出し関数の型
export type Handler<T extends RequestData, U extends ResponseData | Response> = (arg?: T) => Promise<U[] | U>;

// APIレスポンスのデータからHTMLタグを生成する関数の型
export type CreateElement<T extends ResponseData> = (resultApi: T[]) => JSX.Element[];
