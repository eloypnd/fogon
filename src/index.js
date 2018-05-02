import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import AppContainer from './containers/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
