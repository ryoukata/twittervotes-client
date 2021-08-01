import React from 'react';

interface ButtonProperty {
  href?: string
  className: string
  valueText: string
}

export const Button: React.FC<ButtonProperty> = (props: ButtonProperty) => {
  return (
    <a href={props.href} className={props.className}>{props.valueText}</a>
  )
}