import { fetchBase } from './base'

export const _get = (url, config) => (
  fetchBase(url,
    {
      method: 'GET'
    },
    config)
)
export const _post = (url, body, config) => (
  fetchBase(url,
    {
      method: 'POST',
      body: JSON.stringify(body)
    },
    config
  )
)
export const _put = (url, body, config) => (
  fetchBase(url,
    {
      method: 'PUT',
      body: JSON.stringify(body)
    },
    config
  )
)
export const _patch = (url, body, config) => (
  fetchBase(url,
    {
      method: 'PATCH',
      body: JSON.stringify(body)
    },
    config
  )
)
export const _delete_ = (url, config) => (
  fetchBase(url,
    {
      method: 'DELETE',
    },
    config
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
