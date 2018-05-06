import React from 'react'
import { Avatar, Box, Flex, Link, Truncate } from 'rebass'

const Header = ({name, profile_image_url_https, screen_name}) => (
  <Flex>
    <Box mr={2}><Avatar src={profile_image_url_https} /></Box>
    <Box>
      <Truncate fontWeight='bold' fontSize={2}>{name}</Truncate>
      <Link href={`https://twitter.com/${screen_name}`} target='_blank'>
        @{screen_name}
      </Link>
    </Box>
  </Flex>
)

export default Header
