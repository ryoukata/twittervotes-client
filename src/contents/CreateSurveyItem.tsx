import React, { useEffect, useState } from 'react';
import {Title as CreateSurveyTitle} from '../components/Title';
import {Button as CreateButton} from '../components/Button';
import {FormInputItem} from '../components/FormInputItem';

export const CreateSurveyItem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState('');

  useEffect(() => {
    console.log(title, options);
  }, [title, options]);

  const generateJson = () => {
    const separateOptions = options.split(",");
    const trimSeparateOptions = separateOptions.map(option => option.trim());
    return JSON.stringify({title: title, options: trimSeparateOptions});
  }

  return (
    <div className="container">
      <div className="col-md-4"></div>
      <CreateSurveyTitle name="Create Survey Item" />
      <FormInputItem
        changeValue={setTitle}
        labelHtmlFor="title" 
        labelValue="Title"
        type="text"
        className="form-control"
        id="title"
        placeholder="Title" />
      <FormInputItem 
        changeValue={setOptions}
        labelHtmlFor="options" 
        labelValue="Selection" 
        type="text" 
        className="form-control" 
        id="options" 
        placeholder="Options" 
        helpMessage="(input comma separated)" />
      <CreateButton className="btn btn-primary" valueText="Create" funcArg={generateJson()} />
      or <a href="/">Cancel</a>
      <div className="col-md-4"></div>
    </div>
  );
} 