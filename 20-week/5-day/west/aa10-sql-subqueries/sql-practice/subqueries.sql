-- Phase 1
-- Using JOIN clause
SELECT * FROM cats
JOIN toys ON (toys.cat_id = cats.id)
WHERE cats.name = "Garfield";

-- Using Subquery
SELECT toys.name FROM toys
WHERE toys.cat_id IN (
    SELECT id FROM cats
    WHERE name = "Garfield"
);

-- Phase 2
INSERT INTO toys (name, cat_id)
VALUES
("Pepperoni", (
    SELECT id FROM cats
    WHERE name = "Garfield"
));

-- BONUS
-- Phase 1
INSERT INTO toys (name, cat_id)
SELECT 'Cat Bed', id
FROM cats
WHERE birth_year < 2013;

-- Phase 2
-- Backup the cats table
INSERT INTO cats_backup
SELECT * FROM cats;

-- Backup the toys table
INSERT INTO toys_backup
SELECT * FROM toys;