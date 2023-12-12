-- Inserting into a table with keys / defaults
-- Inserting into a table without defaults / keys

INSERT INTO users (username, email)
VALUES
    ('yake', 'yake@test.io'),
    ('shmake', 'shmake@test.io');

INSERT INTO users (id, username, email)
VALUES
    (11, 'caitlin', 'caitlin@test.io');