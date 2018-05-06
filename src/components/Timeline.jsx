import React from 'react'
import { Container, Flex } from 'rebass'
import { Intro, Loading, TimelineItem } from '.'

const Timeline = ({isLoading, posts}) => (
  <Container>
    <Intro />
    {isLoading && <Loading />}
    {!!posts.length && (
      <Flex flexWrap='wrap'>
        {posts.map(
          item => <TimelineItem key={item.id} {...item} />
        )}
      </Flex>
    )}
  </Container>
)

export default Timeline
