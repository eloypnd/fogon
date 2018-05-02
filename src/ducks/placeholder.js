/**
 * @module ducks/placeholder
 *
 * This module follows
 * {@link https://github.com/erikras/ducks-modular-redux|ducks propsal}
 * to orginise actions, reducers and epics.
 */
import { handleError } from '../util'
const fetch = window.fetch

// ACTIONS
export const REQUEST_PLACEHOLDER = 'polls/placeholder/REQUEST_PLACEHOLDER'
export const RECEIVE_PLACEHOLDER = 'polls/placeholder/RECEIVE_PLACEHOLDER'
export const FAILURE_PLACEHOLDER = 'polls/placeholder/FAILURE_PLACEHOLDER'

// REDUCER

/**
 * Object describing the initial state
 * @type {Object}
 */
const initialState = {
  isLoading: false
}

/**
 * @function reducer
 * @param {Object} [state=initialState]
 * @param {FSA} action @see {@link https://github.com/acdlite/flux-standard-action|FSA}
 * @return {Object}
 */
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_PLACEHOLDER:
      return Object.assign({}, state, {isLoading: true})
    case RECEIVE_PLACEHOLDER:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      })
    case FAILURE_PLACEHOLDER:
      return Object.assign({}, state, {
        error: action.error && action.payload,
        isLoading: false
      })
    default:
      return state
  }
}

// ACTION CREATORS

export const requestPlaceholder = () => ({type: REQUEST_PLACEHOLDER})

export const receivePlaceholder = (payload) => ({
  type: RECEIVE_PLACEHOLDER,
  payload
})

export const failurePlaceholder = (error) => ({
  type: FAILURE_PLACEHOLDER,
  payload: error,
  error: true
})

// SIDE-EFFECTS

// side-effect: HTTP request
export const fetchPlaceholder = () => {
  return (dispatch) => {
    dispatch(requestPlaceholder())
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(handleError)
      .then(payload => dispatch(receivePlaceholder(payload)))
      .catch(error => dispatch(failurePlaceholder(error)))
  }
}

// helpers
