DROP TABLE IF EXISTS dogs;

DROP TABLE IF EXISTS shelters;

DROP TABLE IF EXISTS breeds;

SELECT
    debuggin
FROM
    debugger
WHERE
    id = 3;

CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location VARCHAR(50)
    );

CREATE TABLE
    dogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        shelter_id INTEGER,
        breed_id INTEGER,
        FOREIGN KEY (shelter_id) REFERENCES shelters (id), FOREIGN KEY (breed_id) REFERENCES breeds (id)
    );

CREATE TABLE
    breeds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        breed VARCHAR(50)
    );

INSERT INTO
    shelters
VALUES
    (1, 'DFW'),
    (2, 'Fort Worth'),
    (3, 'Waco'),
    (4, 'Tyler');

INSERT INTO
    dogs
VALUES
    (1, 'Fido', 1, 1),
    (2, 'Lucky', 2, 2),
    (3, 'Roofus', 3, 3),
    (4, 'Spud', 3, 4),
    (5, 'Spud', 4, 5);

INSERT INTO
    breeds
VALUES
    (1, 'Golden'),
    (2, 'Lab'),
    (3, 'Lab'),
    (4, 'Pug'),
    (5, 'Golden');



-- - I want to be able to know what breed of dogs are at each shelter.

SELECT
    breeds.breed,
    location
FROM
    breeds
    JOIN dogs ON breeds.id = dogs.breed_id
    JOIN shelters ON dogs.shelter_id = shelters.id;
