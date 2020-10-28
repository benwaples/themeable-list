import React from 'react'
import { spookyImg } from '../../halloween-gif'
import { useTheme } from '../../hooks'
import './Character.scss'

export type CharacterProps = {
  name: string,
  imageUrl: string, 
  id: string
}

export const Character = ({name, imageUrl, id}: CharacterProps) => {
  const theme = useTheme()

  const randomPick: number = Math.floor(Math.random() * Math.floor(6))

  return (
    <div className="character-card">
      <h1>{name}</h1>
      <div>
        <img src={imageUrl} alt={id}/>
        
        <img 
        src={spookyImg[randomPick]} alt="spooked" 
        className={(theme === 'midnightOnHalloween') ?"im-spooked": 'ignored'} 
        />
      </div>
    </div>
  )
}
