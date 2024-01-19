-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- name of band, album title

-- .mode box

SELECT bands.name, albums.title 
FROM albums JOIN bands ON (albums.band_id = bands.id);


-- ! Super cool and JOIN-less 
-- SELECT bands.name, albums.title 
-- FROM bands, albums 
-- WHERE albums.band_id = bands.id;