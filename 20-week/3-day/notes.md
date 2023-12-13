# Beginner's Guide to SQL and SQLite

## Understanding Database Relationships

### Primary and Foreign Keys
In a relational database, a primary key uniquely identifies each record in a table. It plays a crucial role in establishing relationships between tables. A foreign key, on the other hand, is a field in one table that refers to the primary key in another table. This establishes a link between the two tables, forming the basis of relationships.

### Building Relationships
One-to-Many Relationship
To create a one-to-many relationship between two tables, introduce a foreign key in the "many" side table that references the primary key in the "one" side table. For instance, a foreign key in a "Orders" table could reference the primary key in a "Customers" table.

### Many-to-Many Relationship
To create a many-to-many relationship, use an intermediary table that contains foreign keys referencing the primary keys of the two tables involved. For example, if you have "Students" and "Courses," create a third table, say "Enrollments," with foreign keys pointing to both "Students" and "Courses."

### Cascading Deletions
When you use the DELETE operation on an entry, cascading deletions may be necessary to maintain data integrity. If a foreign key references the deleted entry, you might want to set up cascading deletions to remove related records in other tables automatically.

### Database Design
Database Relationship Diagrams
Designing a database involves using a database relationship diagrams design tool. This tool helps visualize the structure of your database, indicating tables, their fields, and relationships. Tools like draw.io or Lucidchart are suitable for creating these diagrams.

### Querying Data
Selective Queries <br/>
Multiple Entries <br/>
Use the WHERE clause to selectively query for multiple entries based on specific conditions. For example, SELECT * FROM Customers WHERE Country = 'USA'; retrieves all customers from the USA.

### Single Entry
Limit the result set to a single entry using the LIMIT clause. For instance, SELECT * FROM Products LIMIT 1; fetches only one product.

### Ordering Queries
Use the ORDER BY clause to sort query results. For instance, SELECT * FROM Employees ORDER BY Salary DESC; arranges employees in descending order of salary.

### Joining Tables
Combine data from multiple tables using the JOIN operation. For example, SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID; retrieves order details along with customer names.

### Query Order of Operations
Understand the correct order of operations in a SELECT query: FROM (specify tables), JOIN (if necessary), WHERE (apply conditions), ORDER BY (sort results), and finally LIMIT (if needed).

By mastering these fundamental concepts, you'll be well on your way to becoming proficient in SQL and SQLite. Happy querying!
