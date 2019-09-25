# @exifers/fetch-utils
A set of handy functions to perform requests on an API very easily.  

This module is designed to be easy-to-use and lightweight. If you need a more advanced tool with response/request transformation for example you may want something like [axios](https://www.npmjs.com/package/axios).

## Install
```bash
// npm
npm install --save @exifers/fetch-utils

// yarn
yarn add @exifers/fetch-utils
```

## Usage
### Import
- ES6 modules
```javascript
// using named imports
import { get, post, delete_ } from '@exifers/fetch-utils'

// using default import
import request from '@exifers/fetch-utils'
request.get(/* arguments */)
request.post(/* arguments */)
request.delete(/* arguments */)
```
- CommonJS modules
```javascript
var request = require('@exifers/fetch-utils');
request.get(/* arguments */);
request.post(/* arguments */);
```

### get(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { get } from '@exifers/fetch-utils'

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
import { post } from '@exifers/fetch-utils'

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
import { put } from '@exifers/fetch-utils'

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
import { patch } from '@exifers/fetch-utils'

patch('/api/todos/1', {done:true})
    .then(json => (
        console.log('Todo updated')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
### delete_(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { delete_ } from '@exifers/fetch-utils'

delete_('/api/todos/1')
    .then(json => (
        console.log('Todo deleted')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```
Note that ```delete``` is a reserved keyword in javascript so we named it ```delete_```. You can also use the default import to avoid that collision:
```javascript
import request from '@ecifers/fetch-utils'

request.delete('/api/todos/1')
    .then(json => (
        console.log('Todo deleted')
    ))
    .catch(error => (
        console.warn('An error happened: ' + error)
    ))
```

### options(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { options } from '@exifers/fetch-utils'

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
import { head } from '@exifers/fetch-utils'

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
import { trace } from '@exifers/fetch-utils'

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
By default, all requests are performed with the ```XCSRF-Token``` header with ```csrftoken``` cookie as value. This makes it working nicely with a [Django](https://www.djangoproject.com) backend.

## Licence
[MIT](https://couto.mit-license.org/)

## Authors
Exifers
