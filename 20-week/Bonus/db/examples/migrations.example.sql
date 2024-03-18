PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS shelters;

CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location VARCHAR(50) NOT NULL
    );

CREATE TABLE
    dogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        breed VARCHAR(50),
        shelter_id INTEGER NOT NULL,
        FOREIGN KEY (shelter_id) REFERENCES shelters (id) ON DELETE CASCADE
    );
