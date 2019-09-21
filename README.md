# @exifers/fetch-utils
A set of handy functions to perform requests on an API very easily.

## Usage
### get(\<url\>).then(\<handle response\>).catch(\<handle error\>)
```javascript
import { get, post } from '@exifers/fetch-utils'

get('/api/todos/')
    .then(json => (
        console.log('Todos: ' + JSON.stringify(json))
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### post(\<url\>, \<body\>).then(\<handle response\>).catch(\<handle error\>)
```javascript
post('/api/todos/', {text:'Clean my room',done:false})
    .then(json => (
        console.log('Todo added')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
## CSRF Token
By default, ```post``` adds the ```XCSRF-Token``` header with the ```csrftoken``` cookie as value. This makes it working nicely with a [Django](https://www.djangoproject.com) backend.

## Licence
[MIT](https://couto.mit-license.org/)

## Authors
Exifers
