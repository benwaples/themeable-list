import React from 'react'

export type CharacterProps = {
  name: string,
  imageUrl: string, 
  id: string
}

export const Character = ({name, imageUrl, id}: CharacterProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={id}/>
    </div>
  )
}
