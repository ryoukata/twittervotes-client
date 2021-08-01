import React from 'react';

interface TitleProperty {
  name: string
  description?: string
}

export const Title: React.FC<TitleProperty> = (props: TitleProperty) => {
  return (
    <>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    </>
  )
}