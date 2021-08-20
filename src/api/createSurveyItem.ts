import React from 'react';
import {CreateItemHandler} from '../type/ApiType';
import {DetailPathOfSurveyItem} from '../type/DataType';

const URL: string = "http:localhost:8080/polls";
const pathParam: string = "?key=abc123";

export const createSurveyItem: CreateItemHandler = (arg): Promise<Response> => {
  const headers: Headers = new Headers();
  headers.append('method', 'POST');
  headers.append('Content-Type', 'application/json');
  const params = {
    headers,
    arg
  }
  return fetch(URL+pathParam, params);
}