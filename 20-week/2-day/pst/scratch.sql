.mode box

DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);

INSERT INTO puppies
(name, breed)
VALUES
('dog1', 'dogtype'),
('dog2', 'dogtype'),
('dog3', 'cattype'),
('dog4', 'cattype'),
('dog5', 'cattype'),
('pokemon1', 'pokemon');


SELECT id, name FROM puppies;

DELETE FROM puppies
WHERE id = 2;

SELECT id, name FROM puppies;

UPDATE puppies
SET microchipped = 1
WHERE name LIKE 'dog%';

SELECT * FROM puppies;