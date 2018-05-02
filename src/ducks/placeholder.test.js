import reducer from '.'
import { RECEIVE_PLACEHOLDER } from './placeholder'

describe('placeholder reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      'placeholder': {isLoading: false}
    })
  })

  it('should handle RECEIVE_PLACEHOLDER', () => {
    const FIXTURE = {foo: 'this is a placeholder for the action payload'}

    expect(
      reducer(undefined, {
        type: RECEIVE_PLACEHOLDER,
        payload: FIXTURE
      })
    ).toEqual({
      'placeholder': {isLoading: false, data: FIXTURE}
    })
  })

  // TODO: write tests for the rest of reducers
})
