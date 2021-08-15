import {ResponseData} from './DataType';

export type ApiHandler = <T>(arg?: T) => Promise<ResponseData[]>;
