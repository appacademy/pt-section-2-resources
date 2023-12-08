# Serving Static Files in Express
## Using `express.static`
- To access your static assets in Express you can use the built-in middleware function:
    ```
    express.static(root, [options]);
    ```
    - Note: `root` is the physical location on the machine that hosts the static files.
- In order for Express to send files to the browser, you must place this inside a call to `app.use()`:
    ```
    app.use(path, express.static(root));
    ```
  - Now `path` is the URL path that you want to serve static files to and `root` is the static folder on the machine you will serve files out of.

<br/>

## Multiple folders of static files
- You can use multiple static assets directories and call the `express.static` middleware function multiple times.
    ```
    // looks up the static files in the public folder
    app.use(express.static('public'));
    
    // then looks up the static files in the files folder
    app.use(express.static('files'));
    ```
- The ordering of the middleware functions matter as the code will be read from top to bottom.
