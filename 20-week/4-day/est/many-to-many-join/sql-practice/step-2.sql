-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- first & last of musician that plays piano

-- SELECT
-- JOIN
-- WHERE
-- ORDER BY
-- LIMIT / OFFSET

SELECT musicians.first_name, musicians.last_name
FROM musician_instruments
JOIN musicians ON (musician_instruments.musician_id = musicians.id)
JOIN instruments ON (musician_instruments.instrument_id = instruments.id)
WHERE instruments.type = 'piano';