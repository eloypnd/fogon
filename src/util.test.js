import { formatDate, handleError } from './util'

describe('util', () => {
  it('formatDate', () => {
    expect(
      formatDate('2015-05-27T21:22:26.486000+00:00')
    ).toEqual('5/27/2015')
  })

  it('handleError response ok', () => {
    expect(
      handleError({
        ok: true,
        json: () => ({})
      })
    ).toEqual({})
  })

  it('handleError response NOT ok', () => {
    expect(
      () => handleError({ok: false})
    ).toThrow(/Network Error/)
  })
})
