import React from 'react';
import {createSurveyItem} from '../api/createSurveyItem';

interface ButtonProperty {
  href?: string
  className: string
  valueText: string
  funcArg?: string
}

export const Button: React.FC<ButtonProperty> = (props: ButtonProperty) => {

  const createSurveyItemBtn = () => createSurveyItem(props.funcArg).then((response => {
    setInterval(() => {
      window.location.href = "http://localhost:3000/view?poll=" + response.headers.get('Location');
    }, 10000);
  }));
  
  return (
    (props.href) ? 
      <a href={props.href} className={props.className}>{props.valueText}</a> : 
      <button className={props.className} onClick={createSurveyItemBtn}>{props.valueText}</button>
  )
}