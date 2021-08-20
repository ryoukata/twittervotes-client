import React from 'react';
import {CreateItemHandler} from '../type/ApiType';
import {createSurveyItem} from '../api/createSurveyItem';

interface ButtonProperty {
  href?: string
  className: string
  valueText: string
  funcArg?: string
}

export const Button: React.FC<ButtonProperty> = (props: ButtonProperty) => {

  const createSurveyItemBtn = () => createSurveyItem(props.funcArg).then((response => {
    location.href = "http://localhost:3000/view?poll=" + response.headers.get('Location');
  }));
  
  return (
    (props.href) ? 
      <a href={props.href} className={props.className}>{props.valueText}</a> : 
      <button className={props.className} onClick={createSurveyItemBtn}>{props.valueText}</button>
  )
}