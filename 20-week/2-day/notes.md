# Practice Practice Practice

## Connecting Express

Install and import sqlite

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
db.get("SQL command", ["params", "go", "here"], (err, rows) => {
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
const allDogsSQL = "SELECT * FROM dogs";
const luckySQL = "SELECT * FROM dogs WHERE name = 'Lucky'";
const params = []; // empty on purpose

db.all(allDogsSQL, params, (err, dbData) => {
  console.log(dbData); // all cat data
});

db.get(luckySQL, params, (err, dbData) => {
  console.log(dbData); // just Momo's data
});
```

If we want dynamic data, we could string interpolate

```js
const anyDog = `SELECT * FROM dogs WHERE name = ${dogName}`;
```

However, there's a built in syntax for this!

```js
const anyDog = "SELECT * FROM dogs WHERE name = ?";
const params = ["Lucky"];

// Sqlite will replace the "?" with "Momo"

db.get(anyDog, params, (err, dbData) => {
  console.log(dbData); // Momo's data
});
```

The `params` array maps to the `?`'s in order

---

## Let's make a schema, update some stuff, and get Express into the mix!

Remember! If you get stuck, reference the readings from yesterday/last night's HW
