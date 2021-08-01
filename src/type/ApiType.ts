import {ApiData} from './DataType';

export type ApiHandler = <T>(arg?: T) => Promise<ApiData[]>;
