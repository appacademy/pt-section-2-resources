----------
-- Step 0 - Create a Query
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here
select
    *
from
    cats
    join cat_toys on cat_id = cats.id
    join toys on toy_id = toys.id
where
    toys.id = 5;

-- Paste your results below (as a comment):




----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here
EXPLAIN QUERY PLAN select
    *
from
    cats
    join cat_toys on cat_id = cats.id
    join toys on toy_id = toys.id
where
    toys.id = 5;

-- Paste your results below (as a comment):

-- QUERY PLAN
|--SEARCH TABLE toys USING INTEGER PRIMARY KEY (rowid=?)
|--SCAN TABLE cat_toys
`--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)


-- What do your results mean?

    -- Was this a SEARCH or SCAN?


    -- What does that mean?




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Paste your results below (as a comment):
-- Run Time: real 0.001 user 0.000000 sys 0.000756




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);

-- Analyze Query:
    -- Your code here

-- Paste your results below (as a comment):


-- Analyze Results:

    -- Is the new index being applied in this query?




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
