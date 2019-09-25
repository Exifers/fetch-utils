import { configure } from '@exifers/fetch-utils'

export default configure({
  csrfHeaderName: 'X-CSRFToken',
  csrfHeaderValue: () => 'someValue',
  csrfCookieName: 'csrftoken'
})
