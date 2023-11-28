-- to see all indexes in SQLITE3 use command .indexes
-- to remove an index, use the SQL command: `DROP INDEX [index name];`


----------
-- Step 0 - Create a Query
----------
-- Query: Find a count of `toys` records that have a price greater than
    -- 55 and belong to a cat that has the color "Olive".

SELECT COUNT(*) FROM toys
JOIN cat_toys on toy_id = toys.id
JOIN cats on cat_id = cats.id
WHERE cats.color IS 'Olive' AND
toys.price > 55;

-- Paste your results below (as a comment):

-- 215



----------
-- Step 1 - Analyze the Query
----------
-- Query:

EXPLAIN QUERY PLAN
SELECT COUNT(*) FROM toys
JOIN cat_toys on toy_id = toys.id
JOIN cats on cat_id = cats.id
WHERE cats.color IS 'Olive' AND
toys.price > 55;

-- Paste your results below (as a comment):

-- QUERY PLAN
|--SCAN TABLE cat_toys
|--SEARCH TABLE toys USING INTEGER PRIMARY KEY (rowid=?)
`--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)


-- What do your results mean?

    -- Was this a SEARCH or SCAN?

    -- BOTH


    -- What does that mean?

        -- The primary key index on cats and toys was used to search for
        -- appropriate records, which is good
        -- Every single row of the cat_toys table was scanned, and no index was
        -- used in this operation. This could potentially be improved by
        -- applying an index.




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- .timer on

-- Paste your results below (as a comment):

-- Run Time: real 0.005 user 0.004801 sys 0.000000




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

CREATE INDEX idx_cat_toys_cat_id ON cat_toys(cat_id);
CREATE INDEX idx_cats_color ON cats(color);

-- Analyze Query:
    -- Your code here

-- Paste your results below (as a comment):

-- QUERY PLAN
|--SEARCH TABLE cats USING COVERING INDEX idx_cats_color (color=?)
|--SEARCH TABLE cat_toys USING INDEX idx_cat_toys_cat_id (cat_id=?)
`--SEARCH TABLE toys USING INTEGER PRIMARY KEY (rowid=?)


-- Analyze Results:

    -- We've gone from a SCAN + 2 SEARCH's -> 3 SEARCH's - optimizing our efficiency


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?


    -- Did the execution time improve (decrease)?


    -- Do you see any other opportunities for making this query more efficient?



---------------------------------
-- Notes From Further Exploration
---------------------------------

