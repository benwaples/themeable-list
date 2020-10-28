import React from 'react'
import { useCharacters } from '../../hooks'
import { Character, CharacterProps } from '../Character/Character'

export const CharacterList = () => {

  const {characters, loading, error} = useCharacters()

  const characterElements = characters.map((character: CharacterProps) => <li key={character.id}>
    <Character {...character} />
  </li>)

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed to fetch Rick and Morty Characters</h1>
  return (
    <ul>
      {characterElements}
    </ul>
  )
}
