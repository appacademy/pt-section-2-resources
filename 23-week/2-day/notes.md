# Aggregate Data & Pagination in Sequelize

## Aggregate Data

- Sequelize has built-in methods for:
  - COUNT (Model.count())
  - MIN (Model.min())
  - MAX (Model.max())
  - SUM (Model.sum())

```js
await Challenge.count(); // returns the number of rows in the Challenges table

await Challenge.max('points') // returns the maximum points out of all the challenge points

await Challenge.min('points') // returns the minimum points out of all the challenge points

await Challenge.sum('points') // returns the sum of all points of all challenges

await Challenge.count({
    where: {
        points: {
            [Op.gt]: 25
        }
    }
}); // returns a number
```

We can always calculate aggregate data ourselves after querying the database

```js
const challenges = await Challenge.findAll(); // evaluates to an array

const sumPoints = challenges.reduce((sum, challenge) => (
  sum + challenge.points
), 0); // the sum of all points of all challenges

// the average of all points of all challenges
const avgPoints = sumPoints / challenges.length;
```

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

### PRACTICE - Pagination
