import { CharacterProps } from "../components/Character/Character"

type CharacterShape = {
  id: string,
  name: string,
  image: string
}

export const getCharacters = (): Promise<CharacterProps[]> => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => characters.results.map((character: CharacterShape) => ({
      id: character.id,
      name: character.name,
      imageUrl: character.image
    })))
}