import React from 'react'
import { useTheme, useThemeToggle } from '../../hooks'
import './Header.scss'

export const Header = () => {
  const theme = useTheme()
  const toggle = useThemeToggle()

  const displayTheme = (theme === 'midnightOnHalloween') ?  'Daylight' : 'midnight on halloween'

  const message = (theme === 'midnightOnHalloween') ? 'Night' : 'Day'

  return (
    <header className={theme} id="header">
      <h1>Rick And Morty on Halloween {message}</h1>
      <button onClick={toggle}>see {displayTheme} theme</button>
    </header>
  )
}
