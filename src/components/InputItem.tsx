import React from 'react';

interface FormInputItemProperty {
  changeValue: React.ChangeEventHandler<HTMLInputElement>
  labelHtmlFor: string
  labelValue: string
  type: string
  className: string
  id: string
  placeholder: string
  helpMessage?: string
}

export const InputItem: React.FC<FormInputItemProperty> = (
  {
   changeValue,
   labelHtmlFor,
   labelValue,
   type,
   className,
   id,
   placeholder,
   helpMessage
  }
) => {
  return (
    <div className="form-group">
      <label htmlFor={labelHtmlFor}>{labelValue}</label>
      <input type={type} className={className} id={id} placeholder={placeholder} onChange={changeValue} />
      {helpMessage && <p className="help-block">{helpMessage}</p>}
    </div>
  )
}