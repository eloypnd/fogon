import React from 'react'
import renderer from 'react-test-renderer'
import Topbar from './Topbar'

it('Topbar renders correctly', () => {
  const tree = renderer
    .create(<Topbar />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
