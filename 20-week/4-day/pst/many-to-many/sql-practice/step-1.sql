-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
--  the first name of the musician and the type of instrument

SELECT first_name, type
FROM musician_instruments
JOIN musicians
ON (musician_id = musicians.id)
JOIN instruments
ON (instrument_id = instruments.id);