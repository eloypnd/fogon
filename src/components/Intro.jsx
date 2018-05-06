import React from 'react'
import { Box, Heading, Text } from 'rebass'

const Intro = () => (
  <Box px={2} py={4}>
    <Heading mb={4}>fogón</Heading>
    <Text mb={2}>
      This is a playground where I practice different tools,
      techniques and architectures involve in UI development.
    </Text>
    <Text>
      Currently is using <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>React</a> + <a href='https://redux.js.org' target='_blank' rel='noopener noreferrer'>Redux</a>.
      Styling is done with <a href='https://jxnblk.com/rebass/props' target='_blank' rel='noopener noreferrer'>Rebass</a>.
    </Text>
  </Box>
)

export default Intro
