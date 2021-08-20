import React from 'react';

interface FormInputItemProperty {
  changeValue: React.Dispatch<React.SetStateAction<string>>
  labelHtmlFor: string
  labelValue: string
  type: string
  className: string
  id: string
  placeholder: string
  helpMessage?: string
}

export const FormInputItem: React.FC<FormInputItemProperty> = (props: FormInputItemProperty) => {
  const keepValue = (e: React.ChangeEvent<HTMLInputElement>) => props.changeValue(e.target.value);

  return (
    <div className="form-group">
      <label htmlFor={props.labelHtmlFor}>{props.labelValue}</label>
      <input type={props.type} className={props.className} id={props.id} placeholder={props.placeholder} onChange={keepValue} />
      {props.helpMessage && <p className="help-block">{props.helpMessage}</p>}
    </div>
  )
}