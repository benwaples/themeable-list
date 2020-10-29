import { useState, useEffect, useContext } from "react"
import { CharacterProps } from "./components/Character/Character"
import { ThemeContext, ThemeType } from "./Context/theme-context"
import { getCharacters } from "./services/rick-and-morty-api"


export const useCharacters = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    characters,
    loading,
    error
  }
  
}

export const useTheme = () => {
  const { theme } = useContext<ThemeType>(ThemeContext)
  return theme
}

export const useThemeToggle = () => {
  const { toggle } = useContext<ThemeType>(ThemeContext)
  return toggle
}