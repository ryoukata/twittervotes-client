import React from 'react';

interface TitleProperty {
  name: string
  description?: string
}

export const Title: React.FC<TitleProperty> = ({name, description}) => {
  return (
    <>
      <h1>{name}</h1>
      {description && <p>{description}</p>}
    </>
  )
}