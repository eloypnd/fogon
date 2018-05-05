import React from 'react'
import renderer from 'react-test-renderer'
import TimelineItem from './TimelineItem'

it('TimelineItem renders correctly', () => {
  const tree = renderer
    .create(<TimelineItem />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
