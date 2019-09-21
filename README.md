# @exifers/fetch-utils
A set of handy functions to perform requests on an API very easily.

## Usage
### Import
- ES6 modules
```javascript
import { get, post } from '@exifers/fetch-utils'

import request from '@exifers/fetch-utils'
request.get(/* arguments */)
request.post(/* arguments */)
```
- CommonJS modules
```javascript
var request = require('@exifers/fetch-utils');
request.get(/* arguments */);
request.post(/* arguments */);
```

### get(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
get('/api/todos/')
    .then(json => (
        console.log('Todos: ' + JSON.stringify(json))
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### post(<sub><sup>url</sup></sub>, <sub><sup>body</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
post('/api/todos/', {text:'Clean my room',done:false})
    .then(json => (
        console.log('Todo added')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### put(<sub><sup>url</sup></sub>, <sub><sup>body</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
put('/api/todos/1', {text:'Clean my room',done:false})
    .then(json => (
        console.log('Todo updated')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### patch(<sub><sup>url</sup></sub>, <sub><sup>body</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
patch('/api/todos/1', {done:true})
    .then(json => (
        console.log('Todo updated')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### delete(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
delete('/api/todos/1')
    .then(json => (
        console.log('Todo deleted')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### options(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
options('/api/todos/1')
    .then(json => (
        console.log('Todo options:')
        console.log(json)
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### head(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
head('/api/todos/1')
    .then(json => (
        console.log('Todo head:')
        console.log(json)
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### trace(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
trace('/api/todos/1')
    .then(json => (
        console.log('Todo trace:')
        console.log(json)
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
