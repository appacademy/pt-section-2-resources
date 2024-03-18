PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS fruits;

DROP TABLE IF EXISTS baskets;

CREATE TABLE
    baskets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        dodge INTEGER
    );

CREATE TABLE
    fruits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fruit_name VARCHAR(50),
        flavor VARCHAR(50),
        color VARCHAR(50),
        days_old INTEGER,
        basket_id INTEGER,
        FOREIGN KEY (basket_id) REFERENCES baskets(id) ON DELETE CASCADE
    );
