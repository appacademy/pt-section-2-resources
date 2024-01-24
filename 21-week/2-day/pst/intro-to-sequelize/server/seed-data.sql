DROP TABLE IF EXISTS colors;

CREATE TABLE colors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) UNIQUE,
    hue VARCHAR(255),
    rgb VARCHAR(255)
);

INSERT INTO colors (name, hue, rgb)
VALUES
  ('Red', 'it looks nice', '255, 0, 0'),
  ('White', 'it looks bad', '255, 255, 255'),
  ('Blue', 'it looks pretty awesome', '0, 0, 255');
