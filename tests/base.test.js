import fetch from 'jest-fetch-mock'
import { fetchBase } from '../src/base'

test('fetchBase returns the response from fetch call', (done) => {
  const response = { someKey: 'someValue' }
  fetch.mockResponseOnce(JSON.stringify(response))

  fetchBase('/', {}, {})
    .then(json => {
      expect(json).toEqual(response)
      done()
    })
})

test('fetchBase handles errors', () => {
  const error = new Error('some error message')
  fetch.mockRejectOnce(error)

  expect(
    fetchBase('/', {}, {})
  ).rejects.toThrow(error)
})

test('fetchBase sets csrf header default name', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  fetchBase('/', {}, { customFetch })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers']['X-CSRFToken']).toEqual(
        '' // no cookie mocking setup gives empty string
      )
      done()
    })
})

test('fetchBase sets given csrf header name', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderName = 'Some header name'

  fetchBase('/', {}, {
    customFetch,
    csrfHeaderName
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers'][csrfHeaderName]).toEqual(
        '' // no cookie mocking setup gives empty string
      )
      done()
    })
})

test('fetchBase sets given csrf header value', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderValue = 'Some header value'

  fetchBase('/', {}, {
    customFetch,
    csrfHeaderValue
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers']['X-CSRFToken']).toEqual(
        csrfHeaderValue
      )
      done()
    })
})

test('fetchBase sets given csrf header value as a function', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderValue = () => 'Some header value'

  fetchBase('/', {}, {
    customFetch,
    csrfHeaderValue
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers']['X-CSRFToken']).toEqual(
        csrfHeaderValue()
      )
      done()
    })
})


