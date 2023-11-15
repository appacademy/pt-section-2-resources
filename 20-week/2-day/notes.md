# 🎶 Oh Yeah, Express My Data Mr. Postman 🎶

## Connecting Express

Install and import sqlite

```bash
npm install sqlite3
```

```js
const sqlite3 = require("sqlite3");
```

Create a variable to interact with the database

```js
const db = new sqlite3.Database(
  // File path to url, saved in .env
  process.env.data_source,

  // Give permissions
  sqlite3.OPEN_READWRITE
);
```

`.env`

```env
data_source="dev.db"
```

Get all entries - `db.all`

```js
db.all("SQL command", ["params", "go", "here"], (err, rows) => {
  //
});
```

A single entry - `db.get`

```js
db.get("SQL command", ["params", "go", "here"], (err, row) => {
  //
});
```

Run all other commands - `db.run`

```js
db.run("SQL command", ["params", "go", "here"], (err) => {
  //
});
```

### Express params

When writing SQL in JS, we simply write the command as a string

```js
const allCatsSQL = "SELECT * FROM cats";
const momoSQL = "SELECT * FROM cats WHERE name = 'Momo'";
const params = []; // empty on purpose

db.all(allCatsSQL, params, (err, dbData) => {
  console.log(dbData); // all cat data
});

db.get(momoSQL, params, (err, dbData) => {
  console.log(dbData); // just Momo's data
});
```

If we want dynamic data, we could string interpolate

```js
const anyCat = `SELECT * FROM cats WHERE name = ${catName}`;
```

### However, you **_SHOULD NEVER_** do this!!!

The code above is vulnerable to a `SQL Injection` (more on that later)

Instead there's a built in syntax to use dynamic data!

```js
const anyCat = "SELECT * FROM cats WHERE name = ?";
const params = ["Momo"];

// Sqlite will replace the "?" with "Momo"

db.get(anyCat, params, (err, dbData) => {
  console.log(dbData); // Momo's data
});
```

The `params` array maps to the `?`'s in order

---

### If you get stuck, reference the readings & practices from the HW!
