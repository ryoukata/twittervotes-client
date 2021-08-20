import {PollItems, DetailPathOfSurveyItem} from './DataType';

export type SurveyListHandler = <T>(arg?: T) => Promise<PollItems[]>;

export type CreateItemHandler = <T>(arg?: string) => Promise<Response>;