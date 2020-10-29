import { render } from '@testing-library/react'
import React from 'react'
import { Character } from './Character'

describe('Character component snapshot test', () => {
  it('should take a snapshot of the he character component', () => {
    const props = {
      name: 'ben',
      imageUrl: 'random pic of ben',
      id: '123'
    }
    const { asFragment } = render(<Character {...props}/>)

    expect(asFragment()).toMatchSnapshot()
  })
  
})
