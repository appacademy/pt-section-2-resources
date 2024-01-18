
-- FOREIGN KEY (userId) REFERENCES user(id)

-- ! Bad and unpredictable

-- CREATE TABLE trees (
--   id INTEGER PRIMARY KEY AUTOINCREMENT
--   leafId INTEGER
--   leafId2 INTEGER
--   leafId3 INTEGER
--   leafId4 INTEGER
--   leafId5 INTEGER
--   leafId6 INTEGER
-- );

-- CREATE TABLE leaves (
--   id INTEGER PRIMARY KEY AUTOINCREMNT,
-- );

-- -- ? Good and how we should do it!

-- CREATE TABLE trees (
--   id INTEGER PRIMARY KEY AUTOINCREMENT
-- );

-- CREATE TABLE leaves (
--   id INTEGER PRIMARY KEY AUTOINCREMNT,
--   tree_id INTEGER,
--   FOREIGN KEY (tree_id) REFERENCES trees(id)
-- );

-- INSERT INTO leaves (tree_id)
-- VALUES
-- (1),
-- (1),
-- (1),
-- (1),
-- (1),
-- (1),
-- (1),
-- (1),
-- (1),
-- (1);

-- //! --------------------------------------------------------------------
-- //*                          Many to Many                                           
-- //! --------------------------------------------------------------------

-- theNumberThatYouAre INTEGER PRIMARY KEY AUTOINCREMENT
-- theNumberThatYouAre INTEGER PRIMARY KEY AUTOINCREMENT  
--   FOREIGN KEY (user_id) REFERENCES users(theNumberThatYouAre)
--   FOREIGN KEY (post_id) REFERENCES posts(theNumberThatYouAre)


PRAGMA foreign_keys = ON;

.mode box

DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE likes (
  user_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL,
  is_like BOOLEAN NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);


INSERT INTO users VALUES 
(1),
(2),
(3);

INSERT INTO posts (user_id)
VALUES
(1),
(1),
(1),
(3),
(3),
(3),
(3),
(3),
(3),
(3),
(2);

INSERT INTO likes (user_id, post_id, is_like)
VALUES
(1, 1, true),
(1, 2, true),
(1, 3, true),
(2, 1, true),
(2, 2, true),
(2, 3, true),
(3, 11, false);

