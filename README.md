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
request.get(/* url */)
request.post(/* url */, /* body */)
request.delete(/* url */)
```
- CommonJS modules
```javascript
var request = require('@exifers/fetch-utils');
request.post(/* url */, /* body */);
request.delete(/* url */);
```

### get(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { get } from '@exifers/fetch-utils'

get('/api/todos/')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
### post(<sub><sup>url</sup></sub>, <sub><sup>body</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { post } from '@exifers/fetch-utils'

post('/api/todos/', {text:'Clean my room',done:false})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
### put(<sub><sup>url</sup></sub>, <sub><sup>body</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { put } from '@exifers/fetch-utils'

put('/api/todos/1', {text:'Clean my room',done:false})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
### patch(<sub><sup>url</sup></sub>, <sub><sup>body</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { patch } from '@exifers/fetch-utils'

patch('/api/todos/1', {done:true})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
### delete_(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { delete_ } from '@exifers/fetch-utils'

delete_('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
Note that ```delete``` is a reserved keyword in javascript so we named it ```delete_```. You can also use the default import to avoid that collision:
```javascript
import request from '@exifers/fetch-utils'

request.delete('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```

### options(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { options } from '@exifers/fetch-utils'

options('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
### head(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { head } from '@exifers/fetch-utils'

head('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
### trace(<sub><sup>url</sup></sub>).then(<sub><sup>handle response</sup></sub>).catch(<sub><sup>handle error</sup></sub>)
```javascript
import { trace } from '@exifers/fetch-utils'

trace('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```

## Configuring CSRF Token
By default, all requests are performed with the ```XCSRF-Token``` header with ```csrftoken``` cookie as value. This makes it working nicely with a [Django](https://www.djangoproject.com) backend.

But if you're using another backend that handles the CSRF token in a different way, you can configure it like so :
```javascript
import {configure} from '@exifers/fetch-utils'

const request = configure({
  csrfHeaderName: 'string' // default 'XCSRF-Token'
  csrfCookieName: 'string' // default 'csrftoken'
})

// now this requests will be made with a specific CSRF token :
request.post(/* arguments */)
request.put(/* arguments */)
/* ... */
```
If you don't use cookies to store the CSRF token, you can specify its value directly :
```javascript
import {configure} from '@exifers/fetch-utils'

const request = configure({
  csrfHeaderName: 'string' // default 'XCSRF-Token',
  csrfHeaderValue: 'string' | () => 'string'
})
```

## Missing something ?
You'd want to add a feature ? Feel free to post an issue on Github.

## Licence
[MIT](https://couto.mit-license.org/)

## Authors
Exifers
