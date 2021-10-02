import {RequestData, ResponseData} from '../type/DataType';
import {Handler} from '../type/ApiType';

type RequestMethod = 'GET' | 'POST' | 'DELETE';

const URL = {
  host: "http://localhost:8080",
  path: "polls",
  queryString: "?key=abc123"
}

const getUrl = (pathParam?: string) => URL.host + "/" + URL.path + "/" + (pathParam ? pathParam+"/": "") + URL.queryString;

const getFetchParam = (type: RequestMethod, bodyData?: RequestData) => {
  let params: RequestInit;
  switch(type) {
    case 'GET':
      params = {
        method: 'GET',
        mode: 'cors',
        headers: getHeaders(type)
      }
      return params;
    case 'POST':
      params = {
        method: 'POST',
        mode: 'cors',
        headers: getHeaders(type),
        body: bodyData
      }
      return params;
    case 'DELETE':
      params = {
        method: 'DELETE',
        mode: 'cors',
        headers: getHeaders(type)
      }
      return params;
  }
}

const getHeaders = (type: RequestMethod) => {
  const headers: Headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Request-Headers', 'Content-Type');
  switch(type) {
    case 'GET':
      headers.append('Access-Control-Request-Method', 'GET');
      return headers;
    case 'POST':
      headers.append('Access-Control-Request-Method', 'POST, OPTIONS');
      return headers;
    case 'DELETE':
      headers.append('Access-Control-Request-Method', 'DELETE, OPTIONS');
      return headers;
  }
}

export const getSurveyitem: Handler<RequestData, ResponseData> = (pollId) => {
  return fetch(getUrl(pollId), getFetchParam('GET')).then((response) => response.json());
}

export const getSurveyItemList: Handler<undefined, ResponseData> = () => {
  return fetch(getUrl(), getFetchParam('GET')).then((response) => response.json());
}

export const createSurveyItem: Handler<RequestData, Response> = (surveyItem) => {
  return fetch(getUrl(), getFetchParam('POST', surveyItem));
}

export const deleteSurveyItem: Handler<RequestData, Response> = (pollId) => {
  return fetch(getUrl(pollId), getFetchParam('DELETE'));
}