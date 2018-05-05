import React from 'react'
import { Box, Card, Text } from 'rebass'

const TimelineItem = ({id, text}) => (
  <Box width={[1, 1 / 2, 1 / 3]}>
    <Card>
      <Text>{text}</Text>
    </Card>
  </Box>
)

export default TimelineItem
