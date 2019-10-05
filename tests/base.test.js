import fetch from 'jest-fetch-mock'
import { fetchBase, fetchBaseBody } from '../src/base'

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

  fetchBase('/', {}, {
    customFetch,
    insertCsrfToken: true
  })
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
    csrfHeaderName,
    insertCsrfToken: true
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
    csrfHeaderValue,
    insertCsrfToken: true
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
    csrfHeaderValue,
    insertCsrfToken: true
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers']['X-CSRFToken']).toEqual(
        csrfHeaderValue()
      )
      done()
    })
})

test('fetchBase inserts given content type', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const insertContentType = true
  const contentTypeHeaderValue = 'multipart/form-data'

  fetchBase('/', {}, {
    customFetch,
    insertContentType,
    contentTypeHeaderValue
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers']['Content-Type']).toEqual(
        contentTypeHeaderValue
      )
      done()
    })
})

test('fetchBase doesn\'t insert content type header by default', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  fetchBase('/', {}, {
    customFetch
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers']['Content-Type']).toEqual(
        undefined
      )
      done()
    })
})

test('fetchBase doesn\'t insert csrf token header by default', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderName = 'X-CSRFToken'

  fetchBase('/', {}, {
    customFetch,
    csrfHeaderName
  })
    .then(() => {
      expect(customFetch.mock.calls.length).toBe(1)
      expect(customFetch.mock.calls[0][1]['headers'][csrfHeaderName]).toEqual(
        undefined
      )
      done()
    })
})

test('fetchBaseBody handles object input as a json request', () => {
  const customFetchBase = jest.fn(() => {
  })

  const body = {
    a: 1,
    b: 2
  }

  fetchBaseBody('/', body, {}, { customFetchBase })

  expect(customFetchBase.mock.calls.length).toBe(1)
  expect(customFetchBase.mock.calls[0][1]['body']).toBe(JSON.stringify(body))
  expect(customFetchBase.mock.calls[0][2]['contentTypeHeaderValue']).toBe('application/json')
})

test('fetchBaseBody handles formData input as a formData request', () => {
  const customFetchBase = jest.fn(() => {
  })

  let body = new FormData()
  body.append('a', '1')
  body.append('b', '2')

  fetchBaseBody('/', body, {}, { customFetchBase })

  expect(customFetchBase.mock.calls.length).toBe(1)
  expect(customFetchBase.mock.calls[0][1]['body']).toBe(body)
  expect(customFetchBase.mock.calls[0][2]['insertContentType']).toBe(false)
  expect(customFetchBase.mock.calls[0][2]['contentTypeHeaderValue']).toBe(undefined)
})
