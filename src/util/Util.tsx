import React from 'react';
import {CreateElement} from '../type/ApiType';
import {ResponseData} from '../type/DataType';

const detailUrl = "/view?poll=polls/";

export const createLinkTagListElement: CreateElement<ResponseData> = (resultApi: ResponseData[], aTagList: JSX.Element[] = []) => {
  resultApi.map((result: ResponseData) => aTagList.push(<li><a href={detailUrl+result.id}>{result.title}</a></li>));
  return aTagList;
}