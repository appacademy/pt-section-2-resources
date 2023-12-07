# Express Routers

## Defining Express Routers
- As your web app grows, your routes tend to grow with it.
- Express routers allow developers to create collections of modular, mountable route handlers.
- Using routers helps to keep your code organized and DRY.
- Example of what a "real world" customer order management application might look like:
```
App/
├── Customers (/customer)
│   ├── Add Customer (POST /customer)
│   ├── View Customer Details (GET /customer/:id)
│   ├── Edit Customer (PUT /customer/:id)
│   └── Delete Customer (DELETE /customer/:id)
├── Products (/product)
│   ├── View All Products (GET /product)
│   └── View Product Details (GET /product/:id)
│   // etc..
```
- Use the `express.Router` class to define a collection of route handlers.

<br/>

## Defining a collection of route handlers
- While it's not required, a common convention is to create each Express router instance within its own module/file.
- These files will be stored in a folder named 'routes' and within each file (e.g. home.js, schedule.js, roster.js) include the following:
```
const express = require('express');

// Create the router instance
const router = express.Router()
```
- The `express` module exports the `Router` class on the express function and used to create an instance of a router.
- Previously, you've defined routes using `app` object and moving forward, you will use `router`:
```
// home.js - continued (after require and router declaration found above)

router.get('/home', (req, res) => {
 res.send('Our team homepage');
});
```

<br/>

## Export the router
- In each route file, export the `router` to the `module.exports` property to import into your main application later:
- ```
  module.exports = router;
  ```
