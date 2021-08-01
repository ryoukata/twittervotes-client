import React from 'react';
import {Title as SurveyTitle} from '../components/Title';
import {Button as NewButton} from '../components/Button';
import {List as PollsList} from '../components/IntervalList';
import {getSurveyItemList} from '../api/getSurveyItemList';
import {CreateElement} from '../type/ElementType';
import {ApiData, PollItem} from '../type/DataType';

export const SurveyList: React.FC = () => {
  return (
    <div className="container">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <SurveyTitle name="Survey Item List" />
        <PollsList id="polls" apiHandler={getSurveyItemList} createElement={createElement} />
        <NewButton href="/test" className="btn btn-primary" valueText="New" />
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

const createElement: CreateElement = (resultApi: PollItem[]) => {
  var aTagList: JSX.Element[] = [];
  const url = "/view?poll=polls/";
  resultApi.map((result: PollItem) => {
    const pollId: string = result.id;
    aTagList.push(<a href={url+pollId}>{result.title}</a>);
  });

  return aTagList;
}