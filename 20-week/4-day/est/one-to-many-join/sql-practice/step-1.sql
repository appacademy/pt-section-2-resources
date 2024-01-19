-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.


SELECT bands.name, albums.title
FROM albums JOIN bands
ON (albums.band_id = bands.id);


-- SELECT bands.name, albums.title
-- FROM albums JOIN bands
-- ON (albums.band_id = bands.id)
-- WHERE bands.name = 'The Falling Box';
