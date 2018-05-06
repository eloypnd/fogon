import React from 'react'
import { Container, Flex } from 'rebass'
import { Intro, TimelineItem } from '.'

const Timeline = ({posts}) => (
  <Container>
    <Intro />
    {posts && (
      <Flex flexWrap='wrap'>
        {posts.map(
          item => <TimelineItem key={item.id} {...item} />
        )}
      </Flex>
    )}
  </Container>
)

export default Timeline
