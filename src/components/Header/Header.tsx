import React from 'react'
import { useTheme, useThemeToggle } from '../../hooks'

export const Header = () => {
  const theme = useTheme()
  const toggle = useThemeToggle()

  const displayTheme = (theme === 'midnightOnHalloween') ?  'Daylight Theme' : 'sPoOkEy ThEmE'

  return (
    <h1>
      <button onClick={toggle}>see {displayTheme}</button>
    </h1>
  )
}
