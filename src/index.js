import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { Provider as Rebass } from 'rebass'
import AppContainer from './containers/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Rebass>
      <AppContainer />
    </Rebass>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
