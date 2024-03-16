-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

CREATE TABLE tools (
    id INTEGER PRIMARY KEY,
    department VARCHAR,
    name VARCHAR,
    price DECIMAL
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    phone_number INTEGER
);

CREATE TABLE purchases (
    id INTEGER PRIMARY KEY,
    tool_name VARCHAR,
    quantity INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
