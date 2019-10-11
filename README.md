# @exifers/fetch-utils
[![npm version](https://img.shields.io/npm/v/@exifers/fetch-utils.svg?style=flat-square)](https://www.npmjs.com/package/@exifers/fetch-utils)
[![build status](https://img.shields.io/circleci/build/github/Exifers/fetch-utils)](https://circleci.com/gh/Exifers/fetch-utils)
[![install size](https://badgen.net/packagephobia/install/@exifers/fetch-utils)](https://packagephobia.now.sh/result?p=@exifers/fetch-utils)
[![downloads](https://img.shields.io/npm/dm/@exifers/fetch-utils.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@exifers/fetch-utils)


A set of handy functions to perform requests on an API very easily.  

## Table of Contents
- [Install](#install)
- [Import](#import)
- [Usage](#usage)
    - [Requests](#requests)
        - [GET](#get)
        - [POST](#post)
        - [PUT](#put)
        - [PATCH](#patch)
        - [DELETE](#delete)
        - [OPTIONS](#options)
        - [HEAD](#head)
        - [TRACE](#trace)
    - [Configuring CSRF Token](#configuring-csrf-token)


## Install
```bash
// npm
npm install --save @exifers/fetch-utils

// yarn
yarn add @exifers/fetch-utils
```

## Import
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

## Usage
### Requests
Making requests always follows the same pattern :
```
request_name(url, [body])
    .then(json => /* ... */)
    .catch(error => /* ... */)    
```
```json``` is always the body of the response parsed as a json.

```error``` is either :
- the error thrown by the fetch API
- the body of the response if it has an error HTTP status code

Here are some examples below :
#### GET
```javascript
import { get } from '@exifers/fetch-utils'

get('/api/todos/')
    .then(todos => console.log(todos))
    .catch(error => console.log(error))
```
#### POST
```javascript
import { post } from '@exifers/fetch-utils'

post('/api/todos/', {text:'Clean my room',done:false})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### PUT
```javascript
import { put } from '@exifers/fetch-utils'

put('/api/todos/1', {text:'Clean my room',done:false})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### PATCH
```javascript
import { patch } from '@exifers/fetch-utils'

patch('/api/todos/1', {done:true})
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### DELETE
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

#### OPTIONS
```javascript
import { options } from '@exifers/fetch-utils'

options('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### HEAD
```javascript
import { head } from '@exifers/fetch-utils'

head('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```
#### TRACE
```javascript
import { trace } from '@exifers/fetch-utils'

trace('/api/todos/1')
    .then(json => console.log(json))
    .catch(error => console.log(error))
```

### Configuring CSRF Token
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

## License
[MIT](https://couto.mit-license.org/)

## Authors
Exifers
