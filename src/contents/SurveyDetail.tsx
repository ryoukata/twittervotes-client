import React, { useEffect, useState, useRef } from 'react';
import {PieChartGraph} from '../components/PieChartGraph';
import {getSurveyitem} from '../api/getSurveyItem';
import {deleteSurveyItem} from '../api/deleteSurveyItem';
import {ItemOptions} from '../components/ItemOptions';
import {ResponseItem} from '../type/DataType';

export const SurveyDetail: React.FC = () => {
  const [data, setData] = useState<Record<string, number>>({});
  const [optionItems, setOptionItems] = useState<Record<string, number>>({});
  const [title, setTitle] = useState('...');
  const [id, setId] = useState('');
  const intervalRef = useRef(data);

  useEffect(() => {
    intervalRef.current = data;
    console.log('interval excute!');
  }, [data]);

  useEffect(() => {
    setInterval(() => {
      const poll = window.location.href.split("poll=")[1];
      console.log("detail href: ", window.location.href);
      console.log("detail: ", poll);
      getSurveyitem(poll).then((responseData => {
        const poll: ResponseItem = responseData[0];
        console.log("detail response poll:",poll);
        console.log("id: ", poll.id);
        setTitle(poll.title);
        setId(poll.id);
        setOptionItems(poll.results);
        if (poll.results) {
          setData(poll.results);
        }
      }))
    }, 10000);
  }, []);

  const deleteItem = () => deleteSurveyItem(id).then(() => window.location.href = "/");

  return (
    <div className="container">
      <div className="col-md4"></div>
      <div className="col-md4">
        <h1 id="custom-title" data-field="title">{title}</h1>
        <ItemOptions options={optionItems} />
        <PieChartGraph data={data} />
        <div>
          <button className="btn btn-primary" id="delete" onClick={deleteItem}>Delete This Item</button>
        </div>
      </div>
      <div className="col-md4"></div>
    </div>
  )
}