import { fetchBase, fetchBaseBody } from './base'

export const _get = (url, config) => (
  fetchBase(
    url,
    {
      method: 'GET'
    },
    config
  )
)
export const _post = (url, body, config) => (
  fetchBaseBody(
    url,
    body,
    {
      method: 'POST'
    },
    {
      ...config,
      insertCsrfToken: true,
      insertContentType: true
    }
  )
)
export const _put = (url, body, config) => (
  fetchBaseBody(
    url,
    body,
    {
      method: 'PUT'
    },
    {
      ...config,
      insertCsrfToken: true,
      insertContentType: true
    }
  )
)
export const _patch = (url, body, config) => (
  fetchBaseBody(
    url,
    body,
    {
      method: 'PATCH'
    },
    {
      ...config,
      insertCsrfToken: true,
      insertContentType: true
    }
  )
)
export const _delete_ = (url, config) => (
  fetchBase(url,
    {
      method: 'DELETE',
    },
    {
      ...config,
      insertCsrfToken: true
    }
  )
)
export const _options = (url, config) => (
  fetchBase(
    url,
    {
      method: 'OPTIONS',
    },
    config
  )
)
export const _head = (url, config) => (
  fetchBase(url,
    {
      method: 'HEAD',
    },
    config
  )
)
export const _trace = (url, config) => (
  fetchBase(url,
    {
      method: 'TRACE',
    },
    config
  )
)
