import {PollItems} from '../type/DataType';
import {SurveyListHandler} from '../type/ApiType';

const URL: string = "http://localhost:8080/polls";
const QueryString: string = "/?key=abc123";

export const getSurveyItemList: SurveyListHandler = (): Promise<PollItems[]> => {
  const headers: Headers = new Headers();
  headers.append('method', 'GET');
  headers.append('Content-Type', 'application/json');
  const params = {
    headers
  }
  return fetch(URL+QueryString, params).then((response) => response.json());
}