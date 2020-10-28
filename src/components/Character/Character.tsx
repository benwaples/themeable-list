import React from 'react'
import './Character.scss'

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
      <img src="https://media.giphy.com/media/Ee4Y8s4Lr3c0o/giphy.gif" alt="spooked" className="im-spooked" style={{ display: "none"}} />
    </div>
  )
}
