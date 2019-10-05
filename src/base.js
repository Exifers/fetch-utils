import { getCookie } from './cookie'

const handleErrors = response => {
  if (!response.ok) {
    return response.json().then(json => {
      throw json
    })
  }
  return response
}

const eval_ = (f) => {
  if (typeof f === 'function') {
    return f()
  }
  return f
}

export const fetchBaseBody = (url, body, context = {}, config = {}) => {
  let adaptedBody = body
  if (body instanceof FormData) {
    adaptedBody = body
    config.insertContentType = false
  } else if (body instanceof Object) {
    adaptedBody = JSON.stringify(body)
    config.contentTypeHeaderValue = 'application/json'
  }
  return (config.customFetchBase || fetchBase)(
    url,
    {
      ...context,
      body: adaptedBody
    },
    config
  )
}

export const fetchBase = (url, context, config = {}) => {
  context.headers = context.headers || {}

  if (config.insertContentType) {
    context.headers['Content-Type'] = config.contentTypeHeaderValue || 'application/json'
  }

  if (config.insertCsrfToken) {
    context.headers[config.csrfHeaderName || 'X-CSRFToken'] = config.csrfHeaderValue
      ? eval_(config.csrfHeaderValue)
      : getCookie(config.csrfCookieName || 'csrftoken')
  }

  return (config.customFetch || fetch)(url, context)
    .then(handleErrors)
    .then(response => response.json())
}
