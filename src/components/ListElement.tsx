import React from 'react';

interface ListElementProperty {
  id?: string
  value?: string
  element?: JSX.Element
  elements?: JSX.Element[]
}

export const ListElement: React.FC<ListElementProperty> = ({id, elements}) => {
  return (
    <ul id={id}>
      {
        elements?.map((element) => element)
      }
    </ul>
  )
}