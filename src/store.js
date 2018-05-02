import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from './ducks'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./ducks', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore()
