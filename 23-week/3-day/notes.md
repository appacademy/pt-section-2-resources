# Security, it's important!

## Overview

- Why do we care about security?
  - We might be storing personal data
  - Data breaches can be costly for us/our employers
  - Malicious actors might try to break/take down our apps
- What's our role in security as developers?
  - Be aware of security vulnerabilities
- Non-exhaustive list of types of attacks:
  - SQL injections
  - Cross-site Scripting (XSS)
  - Remote File Inclusion
  - Cross-site Request Forgery (CSRF)

### Quiz 1

## CORS

- CORS is an acronym, it stands for Cross-Origin Resource Sharing
- It allows servers to indicate valid sources (origins) from which resources may be loaded on the browser
- We can set the policy on the server side (backend), but it is enforced on the frontend by the browser
- Express does not support CORS by default, we have to set that up ourselves:
  - `npm install cors`

```js
// app.js
// Import the CORS package
const cors = require('cors');

// ... Server setup

// Use CORS in your application
app.use(cors({
    origin: ["http://example1.com", /\.example2\.com$/] // Array of allowed domains
}))
```

### Quiz 2

## XSS

- XSS stands for Cross-site scripting
  - Refers to the injection and execution of JavaScript into the HTML of an application
- These scripts can perform anything available within browser JavaScript, which can include manipulating HTML, or making HTTP requests to leak sensitive information to another server
- Here at App Academy, you won't be asked to implement any security measures against XSS attacks from scratch
  - Down the line, you will use third-party libraries to perform security checks for you

### Quiz 3