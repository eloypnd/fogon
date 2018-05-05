import reducer from '.'
import { RECEIVE_TWEETS } from './twitter'

describe('twitter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      'twitter': {isLoading: false}
    })
  })

  it('should handle RECEIVE_TWEETS', () => {
    const FIXTURE = {foo: 'this is a placeholder for the action payload'}

    expect(
      reducer(undefined, {
        type: RECEIVE_TWEETS,
        payload: FIXTURE
      })
    ).toEqual({
      'twitter': {isLoading: false, data: FIXTURE}
    })
  })

  // TODO: write tests for the rest of reducers
})
