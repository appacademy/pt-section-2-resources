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
  ```
  module.exports = router;
  ```

<br/>

## Importing Express routers
- Import the `express` module and router modules and assign them to variables:
  ```
  const express = require('express');
  const home = require('./routes/home');
  const schedule = require('./routes/schedule');
  const roster = require('./routes/roster');
  ```
- To expose your router instances to incoming HTTP requests, call the `app.use()` method and pass in the router instances:
  ```
  // Create the Express app.
  const app = express();

  // Mount router instances.
  app.use(home);
  app.use(schedule);
  app.use(roster);
  ```

### Path parameter
- You can also supply another argument to prepend a path to each router:
  ```
  app.use('/', home);
  ```
- Assigning the route prefix in the call to `app.use()` is considered best practice. This prevents you from having to include the prefix on every route defined and makes code easier to read and maintain.
