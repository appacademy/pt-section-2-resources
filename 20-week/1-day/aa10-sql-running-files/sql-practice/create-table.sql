-- Step 1
-- Your code here
DROP TABLE IF EXISTS customers;

DROP TABLE IF EXISTS pies;

CREATE TABLE
  pies (flavor VARCHAR(255) PRIMARY KEY, price FLOAT);

CREATE TABLE
  customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
  );
