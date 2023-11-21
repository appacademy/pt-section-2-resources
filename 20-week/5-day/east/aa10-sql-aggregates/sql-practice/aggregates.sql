-- STEP 1
SELECT COUNT(*) AS total_cats FROM cats;


-- STEP 2
-- Separate queries
select *
from cats
where birth_year in (
        select
            max(birth_year)
        from
            cats
    );

SELECT *
from cats
where birth_year in (
        select
            min(birth_year)
        from
            cats
    );

-- One query
SELECT name, birth_year, (2023 - birth_year) AS age FROM cats
WHERE birth_year = (SELECT MIN(birth_year) AS oldest FROM cats)
OR birth_year = (SELECT MAX(birth_year) AS youngest FROM cats);

-- BONUS STEP 1
SELECT cats.name, COUNT(toys.id) AS toy_count
FROM cats
JOIN toys ON (toys.cat_id = cats.id)
GROUP BY cats.id;

-- BONUS STEP 2
SELECT cats.name, COUNT(toys.id) AS toy_count
FROM cats
JOIN toys ON (toys.cat_id = cats.id)
GROUP BY cats.id
HAVING toy_count > 1;