-- STEP 1
SELECT COUNT(*) AS cat_count FROM cats;

-- STEP 2
SELECT name, MIN(birth_year) FROM cats;
SELECT name, MAX(birth_year) FROM cats;

SELECT name, birth_year, (2023 - birth_year) AS age FROM cats
WHERE birth_year = (SELECT MIN(birth_year) FROM cats) OR
birth_year = (SELECT MAX(birth_year) FROM cats);

-- BONUS

-- STEP 1
SELECT c.name AS cat_name,
COUNT(t.id) AS number_toys
FROM cats AS c
LEFT JOIN toys AS t ON c.id = t.cat_id
GROUP BY c.name, c.birth_year
ORDER BY c.birth_year;

-- STEP 2
SELECT c.name AS spoiled_gato, COUNT(toys.id) AS toy_count
FROM cats c
JOIN toys ON (c.id = toys.cat_id)
GROUP BY c.id
HAVING toy_count > 1;