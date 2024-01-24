DROP TABLE IF EXISTS colors;

CREATE TABLE colors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) UNIQUE,
    hue VARCHAR(255)
);

INSERT INTO colors (name, hue)
VALUES
  ('Red', 'literally doesnt matter'),
  ('White', 'literally does matter'),
  ('Blue', 'literally doesnt matt know that he is mean to me?');
