import React from 'react';
import {PollItem} from '../type/DataType';
import {ApiHandler} from '../type/ApiType';
import { rejects } from 'assert';

const URL: string = "http://localhost:8080/polls";
const QueryString: string = "/?key=abc123";

export const getSurveyItemList: ApiHandler = (): Promise<PollItem[]> => {
  const headers: Headers = new Headers();
  headers.append('method', 'GET');
  headers.append('Content-Type', 'application/json');
  const params = {
    headers
  }
  return fetch(URL+QueryString, params).then((response) => response.json());
}