import React, { useEffect, useRef, useState } from 'react';
import {Title as SurveyTitle} from '../components/Title';
import {Button as NewButton} from '../components/Button';
import {ListElement as PollsList} from '../components/ListElement';
import {getSurveyItemList} from '../api/callApi';
import {createLinkTagListElement} from '../util/Util';
import {PollItems} from '../type/DataType';

export const SurveyList: React.FC = () => {
  const [apiData, setApiData] = useState<PollItems[]>([]);
  const intervalRef = useRef(apiData);

  useEffect(() => {
    intervalRef.current = apiData;
    console.log('interval excute!');
  }, [apiData]);

  useEffect(() => {
    setInterval(() => {
      getSurveyItemList().then((result) => {
        console.log("ItemList: ", intervalRef.current);
        setApiData(result as PollItems[]);
      });
    }, 10000);
  }, []);

  return (
    <div className="container">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <SurveyTitle name="Survey Item List" />
        <PollsList id="polls" elements={createLinkTagListElement(intervalRef.current)} />
        <NewButton href="/new" className="btn btn-primary" valueText="New" />
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}