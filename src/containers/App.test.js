import React from 'react'
import renderer from 'react-test-renderer'
import { AppContainer } from './App'

it('AppContainer renders correctly', () => {
  const tree = renderer
    .create(<AppContainer fetchPlaceholder={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
