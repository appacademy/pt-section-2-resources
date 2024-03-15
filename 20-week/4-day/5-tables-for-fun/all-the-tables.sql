.mode box

-- Requirements:
-- - Phase 1: I want to be able to find all shelters and see their location.
-- - Phase 2: I want to be able to find all dogs and see what shelter they're at.
-- - Phase 3: I want to be able to know what breed of dogs are at each shelter.
-- - Phase 4: I want to be able to remove an entire breed of dog for a shelter.

DROP TABLE IF EXISTS breed_types;
DROP TABLE IF EXISTS breeds;
DROP TABLE IF EXISTS shelters;
DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS locations;

CREATE TABLE
    locations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50)
    );
INSERT INTO locations
VALUES
(1, 'DFW'),
(2, 'NYC'),
(3, 'Waco'),
(4, 'San Fran'),
(5, 'Beverly Hills');

    CREATE TABLE
    breeds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        breed_name VARCHAR(50)
    );
INSERT INTO breeds
VALUES
(1, 'Poodle'),
(2, 'Golden'),
(3, 'Pug'),
(4, 'Chihuahua');

-- a location can have many shelters
-- DFW has the uptown shelter and the midtown shelter
CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location_id INTEGER NOT NULL,
        shelter_name VARCHAR(50),
        FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
    );
INSERT INTO shelters
VALUES
(1, 1, 'Uptown Shelter'),
(2, 1, 'Midtown Shelter'),
(3, 2, 'Time Square Shelter'),
(4, 3, 'Mid TX Shelter'),
(5, 4, 'Golden Gate Shelter'),
(6, 5, 'Kardashian Shelter');

-- a shelter can have many dogs
CREATE TABLE
    dogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        shelter_id INTEGER NOT NULL,
        FOREIGN KEY (shelter_id) REFERENCES shelters (id) ON DELETE CASCADE
    );
INSERT INTO dogs
VALUES
(1, 'Roofer', 1),
(2, 'Pongo', 2),
(3, 'Glammy', 3),
(4, 'Hank', 4),
(5, 'Sparky', 5),
(6, 'Kim', 6),
(7, 'Khloe', 6),
(8, 'Kylie', 6);

-- a dog can be many types of breeds and many dogs can be many types of breeds
-- (Golden + Poodle) = 'Golden Doodle', (Pug + Poodle) = 'Puggle'
CREATE TABLE
    breed_types (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dog_id INTEGER NOT NUll,
        breed_id INTEGER NOT NULL,
        FOREIGN KEY (breed_id) REFERENCES breeds (id) ON DELETE CASCADE,
        FOREIGN KEY (dog_id) REFERENCES dogs (id) ON DELETE CASCADE
    );
INSERT INTO breed_types (dog_id, breed_id)
VALUES
( 1, 1),
(1, 2),
(2, 3),
(2, 1),
(3, 4),
(4, 1),
(5, 3),
(5, 1),
(6, 2),
(7, 1),
(8, 3);


-- - Phase 1: I want to be able to find all shelters and see their location.
SELECT shelters.shelter_name, locations.name FROM shelters
JOIN locations
ON locations.id = shelters.location_id;


-- - Phase 2: I want to be able to find all dogs and see what shelter they're at.
SELECT dogs.name, locations.name, shelters.shelter_name FROM locations
JOIN shelters
ON shelters.location_id = locations.id
JOIN dogs
ON dogs.shelter_id = shelters.id;


-- - Phase 3: I want to be able to know what breed of dogs are at each shelter.
SELECT dogs.name, locations.name, shelters.shelter_name, breeds.breed_name FROM locations
JOIN shelters
ON shelters.location_id = locations.id
JOIN dogs
ON dogs.shelter_id = shelters.id
JOIN breeds
ON breed_types.breed_id = breeds.id
JOIN breed_types
ON breed_types.dog_id = dogs.id;


-- - Phase 4: I want to be able to remove an entire breed of dog for a shelter.


----------------------------Try This One for Bonus---------------------------
