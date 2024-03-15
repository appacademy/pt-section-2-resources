
DROP TABLE IF EXISTS debugger;
CREATE TABLE debugger(
    id INTEGER,
    debuggin VARCHAR(50)
);
INSERT INTO debugger
VALUES
(1, '~~~~~~Phase 1~~~~~~~' || char(10) || ''),
(2, '~~~~~~Phase 2~~~~~~~' || char(10) || ''),
(3, '~~~~~~Phase 3~~~~~~~' || char(10) || ''),
(4, '~~~~~~Phase 4~~~~~~~' || char(10) || '');

-------------------------------------------PHASE 1----------------------------------------------------------
-- - I want to be able to find all shelters and see their location

DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS shelters;

SELECT debuggin FROM debugger WHERE id=1;
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
SELECT debuggin FROM debugger WHERE id=2;
CREATE TABLE dogs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    shelter_id INTEGER,
    FOREIGN KEY (shelter_id) REFERENCES shelters(id)
);
INSERT INTO dogs
VALUES (1, 'Fido', 1),
 (2, 'Lucky', 1),
(3, 'Roofus', 2);

SELECT dogs.name, location FROM shelters
JOIN dogs
ON dogs.shelter_id = shelters.id;




-----------------------------------------PHASE 3------------------------------------------------------------
-- - I want to be able to know what breed of dogs are at each shelter.


DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS shelters;
SELECT debuggin FROM debugger WHERE id=3;
CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location VARCHAR(50)
    );

CREATE TABLE
    dogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        breed VARCHAR(50),
        shelter_id INTEGER,
        FOREIGN KEY (shelter_id) REFERENCES shelters (id)
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
    (1, 'Fido', 'Golden', 1),
    (2, 'Lucky', 'Lab', 2),
    (3, 'Roofus', 'Lab', 3),
    (4, 'Spud', 'Pug', 3),
    (5, 'Spud', 'Golden', 4);

SELECT dogs.breed, location FROM shelters
JOIN dogs
ON dogs.shelter_id = shelters.id;

--------------------------------------PHASE 4---------------------------------------------------------------

--  I want to be able to remove an entire breed of dog for a shelter
-- incase I want the shelter to be only for a single breed
SELECT debuggin FROM debugger WHERE id=4;
DELETE FROM dogs
WHERE
    breed = 'Lab'
    AND shelter_id IN (
        SELECT
            id
        FROM
            shelters
        WHERE
            location IN ('Waco')
    );

---
-- "Print Statement"
SELECT dogs.breed, location FROM shelters
JOIN dogs
ON dogs.shelter_id = shelters.id;
---
