import React from 'react'
import { Heading, Link, Text, Small } from 'rebass'

const PlaceholderComponent = ({data}) => (
  <Text lineHeight='1.6' textAlign='center'>
    <Heading is='h1'>Boilerplate</Heading>
    <Link href='https://en.wikipedia.org/wiki/Single-page_application' target='_blank' rel='noopener noreferrer'>SPA</Link><br />
    <Small>with</Small><br />
    <Link href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>create-react-app</Link><br />
    +<br />
    <Link href='https://redux.js.org' target='_blank' rel='noopener noreferrer'>redux</Link>
    {data && (
      <Small color='#abc'>
        <br />&<br />
        <Link href='https://jsonplaceholder.typicode.com/' target='_blank' rel='noopener noreferrer'>JSONPlaceholder</Link>
        {data.map(item => <div key={item.id}>{item.name}</div>)}
      </Small>
    )}
  </Text>
)

export default PlaceholderComponent
