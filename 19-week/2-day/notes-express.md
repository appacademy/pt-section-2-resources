# Express.js

## What is express?

Express is a fast, unopinionated, minimalist web framework for Node.js, used primarily for building web applications and APIs. It helps simplify routing, middleware integration, and template engine integration (although we won't be working with template engines)

## Route Handlers

An express route handler is a function in Express.js that handles requests made to a specific route (URL path) and method (Get, POST, etc)

An example of a route handler that sends a text response with "Hello World":

```
app.get('/', (req, res) => {
    return res.send("Hello World");
});
```

Sending a request to the endpoint `GET /` would then give a text response with "Hello World"

## How to initialize Express

Initializing express is super easy and really only takes two lines. An import and an invocation of the import:

```
const express = require('express');
const app = express();
```

You can then setup your server to listen:

```
app.listen(5000, () => console.log('Server is listening on port 5000...'));
```
