# SQL Aggregates and Sub-queries

## Aggregates

- Used to run basic calculations like the *Count* or *Min/Max* values in a column
- Some of the most common aggregate functions include:
  - COUNT (Number of entries)
  - MIN (Lowest value)
  - MAX (Highest value)
  - SUM/TOTAL (Adds up values)
  - AVG (Average of values)
- The names/types of aggregate functions may vary slightly depending on your *RDBMS*

### Examples

Get a count of all employees in the 'Sales' department

```sql
SELECT COUNT(*) AS count
FROM employees
WHERE department = 'Sales'
```

Frequently, when getting aggregate data, we'll want to group our data by a particular field. We can do this with a *GROUP BY* clause

- How many employees live in each city?

```sql
SELECT COUNT(id), city
FROM employee_addresses
GROUP BY city
```

- What are the average sales per month?

```sql
SELECT AVG(commission), month, year
FROM sales
GROUP BY month, year
```

We can also use the results of aggregate functions to order our results

- How many orders come from each city, ranked from most to least?

```sql
SELECT COUNT(OrderID) AS order_count, city, state
FROM orders
GROUP BY city, state
ORDER BY order_count DESC
```

Filtering data with aggregate functions:

- If we try to place an aggregate function in a *WHERE* clause, we're going to get an error
- Instead we can use a *HAVING* clause in our query to filter the data by an aggregate function
- If we wanted to return only the cities where more than one order was placed, we would:

```sql
SELECT COUNT(order_id) AS order_count, city, state
FROM orders
GROUP BY city, state
HAVING order_count > 1
ORDER BY order_count DESC
```

## Sub-queries

It's just a query in a query

- We can use in lieu of *JOIN* in some cases

- Which cat owns the toy named "Scratcher"?

With a *JOIN*:

```sql
SELECT cats.name
FROM cats
JOIN toys ON toys.cat_id = cats.id
WHERE
  toys.name = 'Scratcher';
```

With a subquery:

```sql
SELECT name
FROM cats
WHERE id IN (
  SELECT cat_id
  FROM toys
  WHERE
    name = 'Scratcher'
);
```

We can also use subqueries when inserting into our database:

```sql
INSERT INTO toys (name, cat_id)
VALUES (
    'New Toy',
    (
        SELECT id
        FROM cats
        WHERE name='Molly'
    )
);
```
