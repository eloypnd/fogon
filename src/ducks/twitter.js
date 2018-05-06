/**
 * @module ducks/twitter
 *
 * This module follows
 * {@link https://github.com/erikras/ducks-modular-redux|ducks propsal}
 * to orginise actions, reducers and epics.
 */
import { handleError } from '../util'
const fetch = window.fetch

// ACTIONS
export const REQUEST_TWEETS = 'fogon/twitter/REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'fogon/twitter/RECEIVE_TWEETS'
export const FAILURE_TWEETS = 'fogon/twitter/FAILURE_TWEETS'

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
    case REQUEST_TWEETS:
      return Object.assign({}, state, {isLoading: true})
    case RECEIVE_TWEETS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      })
    case FAILURE_TWEETS:
      return Object.assign({}, state, {
        error: action.error && action.payload,
        isLoading: false
      })
    default:
      return state
  }
}

// ACTION CREATORS

export const requestTweets = () => ({type: REQUEST_TWEETS})

export const receiveTweets = (payload) => ({
  type: RECEIVE_TWEETS,
  payload
})

export const failureTweets = (error) => ({
  type: FAILURE_TWEETS,
  payload: error,
  error: true
})

// SIDE-EFFECTS

// side-effect: HTTP request
export const fetchTweets = () => {
  return (dispatch) => {
    dispatch(requestTweets())
    return fetch('https://wt-2465218525656d593816c223371899c2-0.sandbox.auth0-extend.com/twitterProxy/1.1/statuses/user_timeline.json?screen_name=sevillaciudad&tweet_mode=extended&count=200')
      .then(handleError)
      .then(payload => dispatch(receiveTweets(payload)))
      .catch(error => dispatch(failureTweets(error)))
  }
}

// helpers
