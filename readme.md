# Http Exceptions

![Travis (.org)](https://img.shields.io/travis/senhungwong/http-exceptions.svg?style=flat-square)
[![GitHub](https://img.shields.io/github/license/senhungwong/http-exceptions.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/@senhung/http-exceptions.svg?style=flat-square)](https://www.npmjs.com/package/@senhung/http-exceptions)


## Install

```bash
$ npm install @senhung/http-exceptions --save
```

OR

```bash
$ yarn add @senhung/http-exceptions
```

## Example Express.js Usage

```javascript
const HttpExceptions = require('@senhung/http-exceptions');
const express        = require('express');

/* create express app */
const app = express();

/* define an app endpoint */
app.get('/', (req, res) => {
    throw new HttpExceptions.NotImplementedHttpException('This method is not implemented yet');
});

/* handle exceptions generally */
app.use((err, req, res, next) => {
    /* http exceptions handling */
    if (err instanceof HttpExceptions.HttpException) {
        return res.status(err.getStatusCode()).json(err.getMessage() ? {message: err.getMessage()} : {});
    }

    /* other errors */
    res.sandStatus(500);
});
```

OR

```javascript
const HttpExceptions = require('@senhung/http-exceptions');
const express        = require('express');

/* create express router  */
const router = new express.Router();

/* define a route endpoint */
router.get('/', (req, res, next) => {
    return next(new HttpExceptions.NotImplementedHttpException('This method is not implemented yet'));
});

/* create express app */
const app = express();

/* use router */
app.use(router);

/* handle exceptions generally */
app.use((err, req, res, next) => {
    /* http exceptions handling */
    if (err instanceof HttpExceptions.HttpException) {
        return res.status(err.getStatusCode()).json(err.getMessage() ? {message: err.getMessage()} : {});
    }

    /* other errors */
    res.sandStatus(500);
});
```

## Tests

```bash
$ npm test
```
