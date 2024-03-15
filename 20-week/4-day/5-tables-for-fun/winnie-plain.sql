
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    name VARCHAR(25) UNIQUE
);

INSERT INTO users VALUES ('Mr. Plain Bear');

SELECT * FROM users;
