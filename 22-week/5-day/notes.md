# MC Review

## Indexes

### No Index

- Slow Search
- Fast Insert/Delete
- EXPLAIN QUERY PLAN = `SCAN`

### Index

- Fast Search
- Slow Insert/Delete
- EXPLAIN QUERY PLAN = `SEARCH`

### Order Matters

When creating an index, we write:

```sql
CREATE INDEX idx_name_here ON anime(genre, completed, studio_id);
```

Here `genre` is the MOST IMPORTANT column, because it's first!

When making a query, our `WHERE` must include `genre` to apply the index.

So these will all be affected by the index:

```sql
SELECT * FROM anime
WHERE genre = 'shonen';

SELECT * FROM anime
WHERE genre = 'shonen' AND studio_id = 1;

SELECT * FROM anime
WHERE studio_id = 3 AND genre = 'isekai';

SELECT * FROM anime
WHERE genre = 'seinen' AND completed IS TRUE AND studio_id = 7;

SELECT * FROM anime
WHERE completed IS TRUE AND genre = 'seinen' AND studio_id = 4;
```

And these **_WILL NOT_** be affected:

```sql
SELECT * FROM anime
WHERE completed IS TRUE;

SELECT * FROM anime
WHERE studio_id = 2;

SELECT * FROM anime
WHERE studio_id = 14 AND completed IS TRUE;

SELECT * FROM anime
WHERE completed IS TRUE AND studio_id = 6 IS FALSE;
```
