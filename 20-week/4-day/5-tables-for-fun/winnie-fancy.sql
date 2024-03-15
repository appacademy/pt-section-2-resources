.mode box

DROP TABLE IF EXISTS user_names;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
       id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE user_names(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name VARCHAR(25) UNIQUE,
       user_id INTEGER NOT NULL,
       FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users VALUES (1);
INSERT INTO user_names VALUES (1, 'Mr. Fancy Bear', 1);

SELECT user_names.name FROM users JOIN user_names ON user_names.user_id = users.id;
