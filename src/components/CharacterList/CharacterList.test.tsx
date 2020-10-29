import { render } from '@testing-library/react'
import React from 'react'
import { CharacterList } from './CharacterList'

describe('CharacterList snapshot', () => {
  it('should save CharacterList snapshot', () => {
    const { asFragment } = render(<CharacterList />)

    expect(asFragment()).toMatchSnapshot()
  })
  
})
