### PRACTICE - Aggregate data

## Pagination

- Recall: pagination in SQL

```sql
SELECT * FROM dogs
    LIMIT 10 OFFSET 40;
```

The same thing in sequelize:

```js
await Dog.findAll({
    limit: 10,
    offset: 40
})
```

Calculating `limit` and `offset`:

- LIMIT  = ( x results/page )
- OFFSET = ( y pages to skip ) * ( x results/page )

If I have a page size of 10, and I want to view the results for page 7, what's my limit and offset?
