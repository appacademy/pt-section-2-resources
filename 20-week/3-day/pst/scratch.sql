-- FOREIGN KEY (user_id) REFERENCES users(id)

-- CREATE TABLE trees (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
-- --   leaf_id
-- --   leaf_id2
-- --   leaf_id3
-- --   leaf_id4
-- --   leaf_id5
-- --   leaf_id6
-- --   leaf_id7
-- );

-- CREATE TABLE leaves (
--   id INTEGER PRIMARY KEY AUTOINCREMNT,
--   tree_id
-- );

-- INSERT INTO trees (id, leaf_id)
-- VALUES
-- (1),
-- (2),
-- (3);

-- INSERT INTO leaves (id, tree_id)
-- VALUES
-- (1, 1),
-- (2, 1),
-- (3, 1),
-- (4, 2),
-- (5, 3),
-- (6, 2);


-- DROP TABLE IF EXISTS trees;
-- DROP TABLE IF EXISTS leaves;

-- CREATE TABLE trees (
--   id INTEGER PRIMARY KEY AUTOINCREMENT
-- );

-- CREATE TABLE leaves (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   tree_id INTEGER,
  
--   FOREIGN KEY (tree_id) REFERENCES trees(id)
-- );


-- INSERT INTO trees (id)
-- VALUES
-- (1),
-- (2),
-- (3);

-- INSERT INTO leaves (tree_id)
-- VALUES
-- (1),
-- (1),
-- (1),
-- (2),
-- (3),
-- (2);


-- CREATE TABLE elden_ring_players (
--   id INTEGER PRIMARY KEY AUTOINCREMENT
-- );

-- CREATE TABLE weapons (
--   id INTEGER PRIMARY KEY AUTOINCREMENT
-- );

-- CREATE TABLE player_weapon (
--   player_id INTEGER,
--   weapon_id INTEGER,
--   FOREIGN KEY (player_id) REFERENCES elden_ring_players(id)
--   FOREIGN KEY (weapon_id) REFERENCES weapons(id)
-- );

-- //! --------------------------------------------------------------------
-- //*                           One To Many                                              
-- //! --------------------------------------------------------------------

-- PRAGMA foreign_keys = ON;

-- DROP TABLE IF EXISTS patients;
-- DROP TABLE IF EXISTS irritants;

-- CREATE TABLE irritants (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   name VARCHAR
-- );

-- CREATE TABLE patients (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   name VARCHAR, 
--   irk_id INTEGER,

--   FOREIGN KEY (irk_id) REFERENCES irritants(id) ON DELETE CASCADE
-- );


-- INSERT INTO irritants (name)
-- VALUES
-- ('Kiki the cat'),
-- ('Raisins'),
-- ('Baby of the trust fund variety'),
-- ('Mangos');

-- INSERT INTO patients (name, irk_id)
-- VALUES
-- ('Momo', 1),
-- ('Tenten', 2),
-- ('Kiki', 2), 
-- ('Michael', 3);

-- //! --------------------------------------------------------------------
-- //*                            Many To Many                                              
-- //! --------------------------------------------------------------------

PRAGMA foreign_keys = ON;

.mode box

DROP TABLE IF EXISTS patient_irritant;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS irritants;

CREATE TABLE irritants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR
);

CREATE TABLE patients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR
);

CREATE TABLE patient_irritant (
  patient_id INTEGER,
  irritant_id INTEGER,
  FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
  FOREIGN KEY (irritant_id) REFERENCES irritants(id) ON DELETE CASCADE
);


INSERT INTO irritants (name)
VALUES
('Kiki the cat'),
('Raisins'),
('Baby of the trust fund variety'),
('Mangos');

INSERT INTO patients (name)
VALUES
('Momo'),
('Tenten'),
('Kiki'),
('Michael');

INSERT INTO patient_irritant (patient_id, irritant_id)
VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 1);