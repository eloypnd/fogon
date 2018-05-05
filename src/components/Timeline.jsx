import React from 'react'
import { Container, Flex } from 'rebass'
import { TimelineItem } from '.'

const Timeline = ({posts}) => (
  <Container>
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
