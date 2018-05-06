import React from 'react'
import renderer from 'react-test-renderer'
import Timeline from './Timeline'

it('Timeline renders correctly', () => {
  const tree = renderer
    .create(<Timeline posts={[]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
