import React, { useEffect, useState } from 'react';
import {PieChartGraph} from '../components/PieChartGraph';
import {getSurveyitem, deleteSurveyItem} from '../api/callApi';
import {ResponseItem} from '../type/DataType';
import {Button as DeleteButton} from '../components/Button';
import {ListElement} from '../components/ListElement';

export const SurveyDetail: React.FC = () => {
  const [poll, setPoll] = useState<ResponseItem>();
  const [data, setData] = useState<Record<string, number>>({});
  const [optionItems, setOptionItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setInterval(() => {
      const pollId = window.location.href.split("poll=")[1];
      getSurveyitem(pollId).then((responseData => {
        setPoll((responseData as ResponseItem[])[0]);
      }))
    }, 15000);
  }, []);

  useEffect(() => {
    if (poll?.results) {
      console.log("results:",poll.results);
      setData(poll.results);
      setOptionItems(getOptionList(poll.results));
    }
  }, [poll])

  const deleteItem = () => deleteSurveyItem(poll?.id).then(() => window.location.href = "/");
  const getOptionList = (optionItems: Record<string, number>, optionList: JSX.Element[] = []) => {
    Object.entries(optionItems).map((option) => {
      optionList.push(<li><small className="label label-default">{option[1]} </small>{option[0]}</li>);
    })
    return optionList;
  }

  return (
    <div className="container">
      <div className="col-md4"></div>
      <div className="col-md4">
        <h1 id="custom-title" data-field="title">{poll?.title}</h1>
        <ListElement elements={optionItems} />
        <PieChartGraph data={data} />
        <div>
          <DeleteButton className="btn btn-primary" id="delete" valueText="Delete This Item" onClickFunc={deleteItem} />
        </div>
      </div>
      <div className="col-md4"></div>
    </div>
  )
}