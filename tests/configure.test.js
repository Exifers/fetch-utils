import { configure } from '../src/index'

test('configure csrfHeaderName', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderName = 'some header name'
  const verbs = ['post', 'put', 'patch', 'delete']

  // testing for each verb is the csrf header name is set in the customFetch
  Promise.all(verbs.map(verb => (
    configure({
      csrfHeaderName,
      customFetch
    })[verb]('/')
      .then(() => {
        expect(customFetch.mock.calls[0][1]['headers'][csrfHeaderName]).toEqual(
          ''
        )
      })
  ))).then(() => done())
})

test('configure csrfHeaderValue', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderValue = 'some header value'
  const verbs = ['post', 'put', 'patch', 'delete']

  // testing for each verb is the csrf header value is set in the customFetch
  Promise.all(verbs.map(verb => (
    configure({
      csrfHeaderValue,
      customFetch
    })[verb]('/')
      .then(() => {
        expect(customFetch.mock.calls[0][1]['headers']['X-CSRFToken']).toEqual(
          csrfHeaderValue
        )
      })
  ))).then(() => done())
})

test('configure csrfHeaderValue as a function', (done) => {
  const customFetch = jest.fn(() => {
    return new Promise((res) => res({
      ok: true,
      json: () => new Promise((res) => res({}))
    }))
  })

  const csrfHeaderValue = () => 'some header value'
  const verbs = ['post', 'put', 'patch', 'delete']

  // testing for each verb is the csrf header value is set in the customFetch
  Promise.all(verbs.map(verb => (
    configure({
      csrfHeaderValue,
      customFetch
    })[verb]('/')
      .then(() => {
        expect(customFetch.mock.calls[0][1]['headers']['X-CSRFToken']).toEqual(
          csrfHeaderValue()
        )
      })
  ))).then(() => done())
})
