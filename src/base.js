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

export const fetchBase = (url, context, config = {}) => {
  context.headers = context.headers || {}
  context.headers['Content-Type'] = 'application/json'
  context.headers[config.csrfHeaderName || 'X-CSRFToken'] = config.csrfHeaderValue
    ? eval_(config.csrfHeaderValue)
    : getCookie(config.csrfCookieName || 'csrftoken')
  return (config.customFetch || fetch)(url, context)
    .then(handleErrors)
    .then(response => response.json())
}
