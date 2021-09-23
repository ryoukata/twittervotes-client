import {CreateItemHandler} from '../type/ApiType';

const URL: string = "http://localhost:8080/polls";
const pathParam: string = "/?key=abc123";

export const createSurveyItem: CreateItemHandler = (arg): Promise<Response> => {
  const headers: Headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Request-Headers', 'Content-Type');
  headers.append('Access-Control-Request-Method', 'POST, OPTIONS');
  const params: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers,
    body: arg
  }
  console.log(params.body);
  return fetch(URL+pathParam, params);
}