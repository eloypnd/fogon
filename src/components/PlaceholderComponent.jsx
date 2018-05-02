import React from 'react'

const PlaceholderComponent = ({data}) => (
  <div style={{textAlign: 'center'}}>
    <h1>Boilerplate</h1>
    <a href='https://en.wikipedia.org/wiki/Single-page_application' target='_blank' rel='noopener noreferrer'>SPA</a><br />
    <small>with</small>
    <p>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>create-react-app</a><br />
      +<br />
      <a href='https://redux.js.org' target='_blank' rel='noopener noreferrer'>redux</a>
    </p>
    {data && (
      <small style={{color: '#abc'}}>
        <p>
          &<br /> <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>
        </p>
        {data.map(item => <div key={item.id}>{item.name}</div>)}
      </small>
    )}
  </div>
)

export default PlaceholderComponent
