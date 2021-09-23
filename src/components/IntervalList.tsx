import React, { useEffect, useRef, useState } from 'react';
import {ListElement} from './ListElement';
import {SurveyListHandler} from '../type/ApiType';
import {CreateElement} from '../type/ElementType';
import {PollItems} from '../type/DataType';

interface ListProperty {
  id: string
  // listElement: JSX.Element
  apiHandler: SurveyListHandler
  createElement: CreateElement
}

export const List: React.FC<ListProperty> = (props: ListProperty) => {
  const [apiData, setApiData] = useState<PollItems[]>([]);
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