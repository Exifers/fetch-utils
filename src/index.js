import { getCookie } from './cookie'

export const handleErrors = response => {
  if (!response.ok) {
    return response.json().then(json => { throw json })
  }
  return response
}

const delay = (ms) => promise => {
  return new Promise(resolve => (
    setTimeout(() => resolve(promise), ms)
  ))
}

const handleDelay = delay(0)

export const fetchBase = (url, context) => {
  context.headers = context.headers || {}
  context.headers['Content-Type'] = 'application/json'
  context.headers['X-CSRFToken'] = getCookie('csrftoken')
  return fetch(url, context)
    .then(handleDelay)
    .then(handleErrors)
    .then(response => response.json())
}

export const get = (url) => (
  fetchBase(url, {
    method: 'GET'
  })
)

export const post = (url, body) => (
  fetchBase(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
)

export const put = (url, body) => (
  fetchBase(url, {
    method: 'PUT',
    body: JSON.stringify(body)
  })
)

export const patch = (url, body) => (
  fetchBase(url, {
    method: 'PATCH',
    body: JSON.stringify(body)
  })
)

export const delete_ = (url) => (
  fetchBase(url, {
    method: 'DELETE',
  })
)

export const options = (url) => (
  fetchBase(url, {
    method: 'OPTIONS',
  })
)

export const head = (url) => (
  fetchBase(url, {
    method: 'HEAD',
  })
)

export const trace = (url) => (
  fetchBase(url, {
    method: 'TRACE',
  })
)

export default {
  get,
  post,
  put,
  patch,
  'delete':delete_,
  options,
  head,
  trace
}
