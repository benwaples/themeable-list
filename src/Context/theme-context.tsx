import React, { FC, useState } from 'react'

export type ThemeType = {
  theme: string,
  toggle: () => void
}
export const ThemeContext = React.createContext<ThemeType>({ theme: '', toggle: () => {}})


export const ThemeProvider:FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('daylight')

  const toggle = () => {
    setTheme((currentTheme: string ) => {
      if(currentTheme === 'daylight') return 'midnightOnHalloween'
      return 'daylight'
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle}} >
      {children}
    </ThemeContext.Provider>
  )
}