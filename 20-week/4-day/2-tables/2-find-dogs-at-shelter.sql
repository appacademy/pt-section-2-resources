DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS shelters;

CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location VARCHAR(50)
    );
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

INSERT INTO
    shelters
VALUES
    (1, 'DFW'),
    (2, 'Fort Worth'),
    (3, 'Waco'),
    (4, 'Tyler');


-- - I want to be able to find all dogs and see what shelter they're at.

SELECT dogs.name, location FROM shelters
JOIN dogs
ON dogs.shelter_id = shelters.id;
