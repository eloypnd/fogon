import React from 'react'
import { Box, Heading, Link, Text } from 'rebass'

const Intro = () => (
  <Box px={2} py={4}>
    <Heading mb={4}>fogón</Heading>
    <Text mb={2}>
      This is a playground where I practice different tools,
      techniques and architectures involve in UI development.
    </Text>
    <Text mb={2}>
      Currently is using <Link href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>React</Link> + <Link href='https://redux.js.org' target='_blank' rel='noopener noreferrer'>Redux</Link>.
      Styling is done with <Link href='https://jxnblk.com/rebass/props' target='_blank' rel='noopener noreferrer'>Rebass</Link>.
    </Text>
    <Text>
      You can find the source code on <Link href='https://github.com/eloypnd/fogon' _target='_blank' rel='noopener noreferrer'>Github</Link>.
    </Text>
  </Box>
)

export default Intro
