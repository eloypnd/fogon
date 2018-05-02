import React from 'react'
import renderer from 'react-test-renderer'
import PlaceholderComponent from './PlaceholderComponent'

it('PlaceholderComponent renders correctly', () => {
  const tree = renderer
    .create(<PlaceholderComponent />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
