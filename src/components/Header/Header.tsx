import React from 'react'
import { useTheme, useThemeToggle } from '../../hooks'

export const Header = () => {
  const theme = useTheme()
  const toggle = useThemeToggle()

  return (
    <h1>
      {theme}
      <button onClick={toggle}>change theme</button>
    </h1>
  )
}
