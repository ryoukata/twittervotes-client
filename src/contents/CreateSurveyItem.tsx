import React, { useState } from 'react';
import {Title as CreateSurveyTitle} from '../components/Title';
import {Button as CreateButton} from '../components/Button';
import {InputItem} from '../components/InputItem';
import {createSurveyItem} from '../api/callApi';

export const CreateSurveyItem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState('');

  const generateJson = () => {
    const separateOptions = options.split(",");
    const trimSeparateOptions = separateOptions.map(option => option.trim());
    // return JSON.stringify({title: title, options: trimSeparateOptions});
    return JSON.stringify({title: title, options: (options.split(",").map(option => option.trim()))});
  }

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const changeOptions = (e: React.ChangeEvent<HTMLInputElement>) => setOptions(e.target.value);
  const createSurveyItemFunc = () => createSurveyItem(generateJson()).then((response => {
    setInterval(() => {
      window.location.href = "http://localhost:3000/view?poll=" + (response as Response).headers.get('Location');
    }, 10000);
  }));

  return (
    <div className="container">
      <div className="col-md-4"></div>
      <CreateSurveyTitle name="Create Survey Item" />
      <InputItem
        changeValue={changeTitle}
        labelHtmlFor="title" 
        labelValue="Title"
        type="text"
        className="form-control"
        id="title"
        placeholder="Title" />
      <InputItem 
        changeValue={changeOptions}
        labelHtmlFor="options" 
        labelValue="Selection" 
        type="text" 
        className="form-control" 
        id="options" 
        placeholder="Options" 
        helpMessage="(input comma separated)" />
      <CreateButton className="btn btn-primary" valueText="Create" onClickFunc={createSurveyItemFunc} />
      or <a href="/">Cancel</a>
      <div className="col-md-4"></div>
    </div>
  );
} 