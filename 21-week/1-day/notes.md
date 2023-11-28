# Efficient and Safe SQL

Last day of SQL before we really move into Sequelize

## SQL Efficiency

### Why efficiency is important when constructing querying databases

- Context is important
  - You will often be writing queries within the context of an API
  - an end-user, developer, or another server will be waiting on a response before they can continue their work
- efficient SQL means that whoever is waiting on a response can go about their business rather than waiting for a loading or unresponsive server, or perhaps even abandoning your application

### What makes SQL inefficient

Many nuances to SQL efficiency, but there are 2 big concepts we should know at this point

- Database connections are *expensive*
  - The connection to the database is often the most costly operation being performed
  - In most cases, the database will be hosted on a different server from the API
  - The connections to the database take time (far more than the actual operation of performing the SQL query)
    - This can potentially take even longer if the database is currently occupied with other requests and an asynchronous connection cannot be established right away.
- Large datasets are inherently more resource-intensive
  - Searching through a table with 10 entries for a match is going to be faster than the same search on a table with a billion entries

### Basic concepts for efficiently interacting with a database using SQL

- Minimize database connections
  - Use a JOIN or subquery to obtain all the needed data in one operation instead of making multiple queries for the data
- If the size of the results is of concern, limiting the fields that are returned from the query to only those needed by the API or end-user can dramatically reduce the size of the return.
- Consider adding an index
  - Indices create an ordered record of the table's entries
  - The index will slow down operations that add, remove, or update those entries
    - Will dramatically increase the speed at which these fields can be searched

## N+1 Queries

- What is an *N+1* query?
  - a set of queries that are used to first get a set of data, and then perform an additional query (or queries) to get additional data for each of the data points returned from the original query.
  - They are called N+1 queries because the 1 initial query will return N number of results, so N additional queries are required to get all of the data you need.

```sql
SELECT * FROM cats;
```

If that query returned 5 records, we would run the following to get each cat's toys:

```sql
SELECT * FROM toys WHERE cat_id = 1;
SELECT * FROM toys WHERE cat_id = 2;
SELECT * FROM toys WHERE cat_id = 3;
SELECT * FROM toys WHERE cat_id = 4;
SELECT * FROM toys WHERE cat_id = 5;
```

- Why are they bad?
  - As the number of cats grows, the number of queries grows along with it
  - Database connections are slow, and each query is it's own connection
- How to avoid them?
  - We can get the same data from the database with a single query, regardless of how many cat records are in the table

```sql
SELECT cats.*, toys.* FROM cats JOIN toys ON toys.id = cats.toy_id;
```

Question: Is the following a N+1 query?

```sql
-- Initial query: Select all posts from the author
SELECT * FROM posts WHERE author_id = ?
-- ? represents the specific author's id

-- Second query: Select all comments from all posts associated with the author
SELECT * FROM comments WHERE post_id IN ?
-- ? represents the collection of all of the returned ids of the author's posts
    -- ? uses the syntax (1,2,3,4)
```

## SQL Indexes

- What is a SQL index?
  - A SQL index is an applied data structure that SQL uses to make lookup, or searching for rows in a table by column values faster for tables that have many rows, or data records.
    - It does this by sorting the previously unordered data values in the indexed column into an order that makes lookup more efficient.
  - A common example of using a SQL index is using a primary key constraint, or by defining a UNIQUE constraint on a column.
- How does it impact lookup, insertion, and deletion operations
  - Without an index, searching for rows of data in a table has a time complexity of O(n).
    - This is because SQL looks at each row one-by-one and compares the row's column value with the target column value.
  - Creating a SQL index improves the lookup time complexity to O(log n).
  - The drawback: Without an index, insertion and deletion have a time complexity of O(1), but with an index, this increases to O(log n).
- When should we use them?
  - As a rule, only use indexes for columns that will have more lookup operations than insertion and deletion operations.
- How to create an index:

```sql
CREATE INDEX index_name ON table_name(column_list);
```

- indexname: `idxtable name_column names`
- column_list: a comma-separated list of column names that you are creating the index for, such as (column1, column2)

- To create an index on the type, chocolate, and baker_id columns on a cookies table, you would use the following syntax:

```sql
CREATE TABLE cookies(
  id INT PRIMARY KEY,
  name TEXT,
  baker_id INT REFERENCES cookies(id),
  type TEXT,
  chocolate BOOLEAN
);
```

```sql
CREATE INDEX
    idx_cookies_type_chocolate_baker_id     -- index_name
    ON cookies(type, chocolate, baker_id);  -- table_name(column_list)
```

- Sometimes, you don't need to set a UNIQUE constraint on a single column, but on a combination of columns.

```sql
-- example
CREATE UNIQUE INDEX idx_cookies_baker_id_type_chocolate
  ON cookies(baker_id, type, chocolate);
  -- defines an index with a UNIQUE constraint to avoid duplicates
  -- across the three columns
```

## Benchmarking SQL Queries

- We can figure out the efficiency of our queries by analyzing how the query is being executed
  - To do this, we can use the following syntax: *EXPLAIN QUERY PLAN [query]*

```sql
# Query, with no indexes defined
sqlite> EXPLAIN QUERY PLAN SELECT * FROM cookies WHERE type = 'sugar';

# Output
`SCAN cookies
        -- SQL is scanning every single record in the cookies table
```

The *SCAN* keyword means that SQL is going through each row in the table and determining if it should be added to the results of the query.

```sql
# Index definition
sqlite> CREATE INDEX idx_cookies_type ON cookies(type);

# Query
sqlite> EXPLAIN QUERY PLAN SELECT * FROM cookies WHERE type = 'sugar';

# Output
`SEARCH cookies USING INDEX idx_cookies_type (type=?)
        -- SQL is applying the idx_cookies_type index to only visit sugar cookies
```

The *SEARCH* keyword means SQL is only visiting some of the rows of a table.

## SQL Injection Attacks

- When you replace a dynamic value in a SQL statement with SQL code with harmful intent.
  - SQL injection attacks are a direct result of users manipulating the SQL code through their own input.
  - Any input that is directly taken from the user and inserted into a SQL query can wreak havoc.

```javascript
app.get('/bookmarks', (req, res) => {
    // Receive input from request body
    let userInput = req.body.userInput;
    // "'Week 1 Notes'; DROP TABLE Bookmarks"

    // Define query to database
    let query = `SELECT * FROM Bookmarks WHERE title = ${userInput}`;
    // `SELECT * FROM Bookmarks WHERE title = 'Week 1 Notes'; DROP TABLE Bookmarks`

    // Execute query
    // ...
})
```
