-- Updating a record
-- What happens if you don't have where
-- Updating multiple columns using SET / ,

-- UPDATE users
-- SET email = 'eviltwin@test.io'
-- WHERE id = 13;

UPDATE users
SET email = 'replica@test.io', created_at = CURRENT_TIMESTAMP;