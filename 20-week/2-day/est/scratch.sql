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

-- INSERT INTO puppies
-- VALUES
-- (1, 'Doggy', 3, 'dogtype', 100),
-- (2, 'Dogger', 1.1, 'dogtype', 2);
INSERT INTO puppies (name)
VALUES
('dog 1'),
('dog 2'),
('dog 3'),
('dog 4');

SELECT name, breed FROM puppies;

DELETE FROM puppies
WHERE id = 3;

SELECT name, breed FROM puppies;

UPDATE puppies
SET microchipped = true -- Without the where changes EVERY PUPPY
WHERE id = 1;

SELECT id, microchipped FROM puppies;