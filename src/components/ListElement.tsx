import React, { useEffect, useState } from 'react';
// import {ApiData} from '../type/DataType';

interface ListElementProperty {
  id?: string
  value?: string
  element?: JSX.Element
}

export const ListElement: React.FC<ListElementProperty> = (props: ListElementProperty) => {
  // const [pollsList, setPollsList] = useState<ApiData[]>([]);
  // useEffect(() => {
  //   props.handler().then(polls => {
  //     setPollsList(polls);
  //   });
  // }, []);
  return (
    // <li><a href="/view?poll=polls/pollID">Poll Title</a></li>
    <li>{props.element}</li>
  )
}