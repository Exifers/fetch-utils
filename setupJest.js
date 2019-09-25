import fetch, { GlobalWithFetchMock } from 'jest-fetch-mock'

global.fetch = fetch
global.fetchMock = global.fetch
