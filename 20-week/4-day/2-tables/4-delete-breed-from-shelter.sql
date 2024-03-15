DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS shelters;

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

-- - I want to be able to remove an entire breed of dog for a shelter incase I want the shelter to be only for a single breed

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
