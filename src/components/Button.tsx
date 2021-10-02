import React from 'react';

interface ButtonProperty {
  className: string
  valueText: string
  onClickFunc?: React.MouseEventHandler<HTMLButtonElement>
  id?: string
  href?: string
}

export const Button: React.FC<ButtonProperty> = (
  {
    className,
    valueText,
    onClickFunc,
    id,
    href
  }
) => {
  
  return (
    (href) ? 
      <a href={href} className={className}>{valueText}</a> : 
      <button className={className} id={id} onClick={onClickFunc}>{valueText}</button>
  )
}