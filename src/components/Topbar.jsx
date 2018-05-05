import React from 'react'
import { Avatar, Heading, Toolbar } from 'rebass'
import logo from '../logo.svg'

const Topbar = ({data}) => (
  <Toolbar>
    <Avatar bg='white' mr={2} size={24} src={logo} />
    <Heading fontSize={3}>fogón</Heading>
  </Toolbar>
)

export default Topbar
