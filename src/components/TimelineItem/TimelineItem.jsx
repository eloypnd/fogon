import React from 'react'
import Header from './Header'
import { Box, Card, Image, Text } from 'rebass'

const TimelineItem = ({media, message, user}) => (
  <Box width={[1, 1 / 2, 1 / 3]} p={1}>
    <Card>
      <Header {...user} />
      {media && media[0].type === 'photo' &&
        <Image src={media[0].media_url_https} my={2} />
      }
      <Text
        dangerouslySetInnerHTML={{__html: message}}
      />
    </Card>
  </Box>
)

export default TimelineItem
