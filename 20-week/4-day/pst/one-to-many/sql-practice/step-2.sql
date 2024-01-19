-- Step 2
-- A WHERE clause can filter across any JOINed table, even if it's not in the
-- final output of what is being SELECTed for.
-- name of band with less than 20k albums sold

SELECT bands.name
FROM albums JOIN bands ON (albums.band_id = bands.id)
WHERE albums.num_sold < 20000;