DROP TABLE IF EXISTS shelters;

CREATE TABLE
    shelters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location VARCHAR(50)
    );

INSERT INTO
    shelters
VALUES
    (1, 'DFW'),
    (2, 'Fort Worth'),
    (3, 'Waco'),
    (4, 'Tyler');

-- - I want to be able to find all shelters and see their location
SELECT
    location
FROM
    shelters;
