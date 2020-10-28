import { render } from '@testing-library/react'
import React from 'react'
import { Header } from './Header'

describe('Header snapshot test', () => {

  it('should take a snapshot of the Header component', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
  
})
