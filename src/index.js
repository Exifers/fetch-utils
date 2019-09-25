import { _delete_, _get, _head, _options, _patch, _post, _put, _trace } from './requests'

/* Ensure exported methods don't take any additional parameters */
export const get = (url) => _get(url)
export const post = (url, body) => _post(url, body)
export const put = (url, body) => _put(url, body)
export const patch = (url, body) => _patch(url, body)
export const delete_ = (url) => _delete_(url)
export const options = (url) => _options(url)
export const head = (url) => _head(url)
export const trace = (url) => _trace(url)

export const configure = (config) => ({
  /* Inject config */
  get: (url) => _get(url, config),
  post: (url, body) => _post(url, body, config),
  put: (url, body) => _put(url, body, config),
  patch: (url, body) => _patch(url, body, config),
  delete: (url) => _delete_(url, config),
  options: (url) => _options(url, config),
  head: (url) => _head(url, config),
  trace: (url) => _trace(url, config)
})

export default {
  get,
  post,
  put,
  patch,
  'delete': delete_,
  options,
  head,
  trace,

  configure
}
