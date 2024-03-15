DROP TABLE IF EXISTS debugger;

CREATE TABLE
    debugger (id INTEGER, debuggin VARCHAR(50));

INSERT INTO
    debugger
VALUES
    (
        1,
        '' || char(10) || '~~~~~~Phase 1~~~~~~~' || char(10) || ''
    ),
    (
        2,
        '' || char(10) || '~~~~~~Phase 2~~~~~~~' || char(10) || ''
    ),
    (
        3,
        '' || char(10) || '~~~~~~Phase 3~~~~~~~' || char(10) || ''
    ),
    (
        4,
        '' || char(10) || '~~~~~~Phase 4~~~~~~~' || char(10) || ''
    );

-------------------------------------------PHASE 1----------------------------------------------------------
-- - I want to be able to find all shelters and see their location
DROP TABLE IF EXISTS dogs;

DROP TABLE IF EXISTS shelters;

SELECT
    debuggin
FROM
    debugger
WHERE
    id = 1;

CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location VARCHAR(50)
    );

INSERT INTO
    shelters
VALUES
    (1, 'DFW'),
    (2, 'Fort Worth'),
    (3, 'Waco'),
    (4, 'Tyler');

SELECT
    location
FROM
    shelters;

-------------------------------------------PPHASE 2----------------------------------------------------------
-- - I want to be able to find all dogs and see what shelter they're at.
SELECT
    debuggin
FROM
    debugger
WHERE
    id = 2;

CREATE TABLE
    dogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        shelter_id INTEGER,
        FOREIGN KEY (shelter_id) REFERENCES shelters (id)
    );

INSERT INTO
    dogs
VALUES
    (1, 'Fido', 1),
    (2, 'Lucky', 1),
    (3, 'Roofus', 2);

SELECT
    dogs.name,
    location
FROM
    shelters
    JOIN dogs ON dogs.shelter_id = shelters.id;

-----------------------------------------PHASE 3------------------------------------------------------------
-- - I want to be able to know what breed of dogs are at each shelter.
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

SELECT
    breeds.breed,
    location
FROM
    breeds
    JOIN dogs ON breeds.id = dogs.breed_id
    JOIN shelters ON dogs.shelter_id = shelters.id;

--------------------------------------PHASE 4---------------------------------------------------------------
--  I want to be able to remove an entire breed of dog for a shelter
-- incase I want the shelter to be only for a single breed
SELECT
    debuggin
FROM
    debugger
WHERE
    id = 4;


DELETE FROM dogs
WHERE breed_id IN (
    SELECT id
    FROM breeds
    WHERE breed = 'Lab'
)
AND shelter_id IN (
    SELECT id
    FROM shelters
    WHERE location = 'Waco'
);

---
-- "Print Statement"

SELECT
    breeds.breed,
    location
FROM
    breeds
    JOIN dogs ON breeds.id = dogs.breed_id
    JOIN shelters ON dogs.shelter_id = shelters.id;

---
