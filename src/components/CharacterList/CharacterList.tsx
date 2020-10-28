import React from 'react'
import { useCharacters, useTheme } from '../../hooks'
import { Character, CharacterProps } from '../Character/Character'
import './CharacterList.scss'

export const CharacterList = () => {

  const {characters, loading, error} = useCharacters()
  const theme = useTheme()

  const characterElements = characters.map((character: CharacterProps) => <li key={character.id}>
    <Character {...character} />
  </li>)

  const displayTheme =(theme === 'midnightOnHalloween') ? 'spooky' : 'daylight'

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed to fetch Rick and Morty Characters</h1>

  return (
    <div className={displayTheme} id="layout">
      <ul>
        {characterElements}
      </ul>
    </div>
  )
}
