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
  isLoading: false,
  data: []
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
        data: action.payload.map(parseTweet)
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

function parseTweet (tweet) {
  if (typeof tweet.retweeted_status !== 'undefined') tweet = tweet.retweeted_status

  return {
    id: tweet.id_str,
    user: tweet.user,
    message: parseTweetMessage(tweet.text ? tweet.text : tweet.full_text, tweet.entities),
    media: tweet.entities.media,
    favorite_count: tweet.favorite_count,
    retweet_count: tweet.retweet_count,
    created_at: tweet.created_at,
    source: 'twitter',
    source_url: 'http://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str
  }
}

/**
 * parse a plain text tweet message to enrich it with entities such as:
 * user mentions, hashtags, urls, ...
 *
 * @function parseTweet
 * @param {string} text
 * @param {object} entities
 * @return {string}
 */
function parseTweetMessage (text, entities) {
  const OPTIONS = {
    hashtags: {href: 'https://twitter.com/hashtag/{keyword}', keyword: 'text', prefix: '#'},
    media: {keyword: 'url', prefix: ''},
    user_mentions: {href: 'https://twitter.com/{keyword}', keyword: 'screen_name', prefix: '@'},
    urls: {href: '', keyword: 'url', prefix: ''}
  }

  return Object.keys(entities)
    // only entities that are in the message
    .filter(key => entities[key].length)
    // transform entities into pairs [keyword/content]
    .map(key => _entity(entities[key], OPTIONS[key]))
    // flatten multidimesional array
    .reduce((prev, elem) => prev.concat(elem), [])
    // replace every enitity in the message
    // with `keyword` by its content
    .reduce(
      (message, item) =>
        message.replace(item.keyword, item.content),
      text
    )
}

/**
 * @function _entity
 * @param {array} entity
 * @param {object} options
 * @return {Array}
 */
function _entity (entity, options) {
  if (typeof entity === 'undefined') return []

  let anchorTmpl = '<a href="{href}" target="_blank">{content}</a>'

  let anchors = entity.map(function (item) {
    // TODO: all of this is too obfuscated, there have to be a better way
    let keyword = options.prefix + item[options.keyword]
    let content = (options.href) ? keyword : item.display_url
    let href = (options.href)
      ? options.href.replace('{keyword}', item[options.keyword])
      : item.expanded_url
    let anchor = anchorTmpl
      .replace('{content}', content)
      .replace('{href}', href)
    return {
      keyword: keyword,
      content: (typeof options.href !== 'undefined') ? anchor : ''
    }
  })

  return anchors
}
