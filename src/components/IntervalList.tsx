import React, { useCallback, useEffect, useRef, useState } from 'react';
import {ListElement} from './ListElement';
import {ApiHandler} from '../type/ApiType';
import {CreateElement} from '../type/ElementType';
import {ApiData} from '../type/DataType';

interface ListProperty {
  id: string
  // listElement: JSX.Element
  apiHandler: ApiHandler
  createElement: CreateElement
}

export const List: React.FC<ListProperty> = (props: ListProperty) => {
  const [apiData, setApiData] = useState<ApiData[]>([]);
  const intervalRef = useRef(apiData);
  useEffect(() => {
    intervalRef.current = apiData;
    console.log('interval excute!');
  }, [apiData]);

  useEffect(() => {
    setInterval(() => {
      props.apiHandler().then((result) => setApiData(result));
    }, 10000);
  }, []);

  return (
    <ul id={props.id}>
      {props.createElement(intervalRef.current).map((aTag) => {
        return <ListElement element={aTag} />
      })}
    </ul>
  )
}