export function getCookie (cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

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

export const post = (url, body) => (
  fetchBase(url, {
    method: 'POST',
    body: body
  })
)

export const get = (url) => (
  fetchBase(url, {
    method: 'GET'
  })
)
