# Intro to Sequelize

## Justify the use of an ORM as a part of a data strategy:

ORM (Object-Relational Mapping) simplifies database interactions by allowing developers to work with objects in code instead of writing raw SQL queries. This abstraction enhances code readability, maintainability, and cross-database compatibility.

## Describe a model and how it is used to interact with a database table in an object-oriented manner:

A model represents a structure in code that mirrors a database table. It defines the properties and behaviors of the data, enabling object-oriented interaction with the corresponding table through an ORM.

## Describe how migrations create or update tables in a database:

Migrations are scripts that define changes to a database schema over time. They create or update tables by applying changes such as adding or modifying columns, indexes, or constraints in a controlled and versioned manner.

## Compare and contrast a migration and a model:

A migration is a script that alters the database schema, while a model is a code representation of a database table. Migrations handle structural changes, and models handle how data is structured and accessed in code.

## Explain how migrations are used to update the features and properties of a database table that is in production:

Migrations are applied sequentially to update the database schema. In a production environment, careful planning and execution of migrations are crucial to ensure data integrity and minimal downtime during updates.

## Customize Sequelize folder structure configuration using a .sequelizerc file:

The .sequelizerc file is used to customize Sequelize's folder structure, allowing developers to define paths for models, migrations, seeders, and other components, providing flexibility in project organization.

## Use Sequelize command-line tool to perform common operations:

Sequelize's command-line tool allows developers to perform common tasks such as generating models, migrations, and seeders, applying migrations, and interacting with the database without writing raw SQL.

## Compare and contrast the sequelize and sequelize-cli node modules:

sequelize is the Node.js ORM module, while sequelize-cli is its command-line interface. The former is used in application code, and the latter is used to execute commands for tasks like migrations and seeding.

## Connect to a database using environment variables:

Connecting to a database using environment variables involves configuring database connection details (e.g., host, username, password) in environment variables, enhancing security and flexibility in different environments.

## Compare and contrast the naming conventions for tables and models in SQL and Sequelize:

SQL often uses snake_case for table names, while Sequelize follows CamelCase for model names. Understanding and adhering to these conventions is essential for seamless integration between code and the database.

## Describe the difference between database-level constraints and model-level validations:

Database-level constraints are rules enforced at the database level, while model-level validations are rules defined in the application code. Database-level constraints ensure data integrity, and model-level validations provide a higher level of abstraction for developer-defined rules.

## Identify when to use a database-level constraint and/or a model-level validation to restrict column values:

Use database-level constraints for critical data integrity rules, and model-level validations for application-specific rules. This ensures a balance between database enforcement and code maintainability.

## Construct migrations to create a table and apply database-level constraints:

Migrations can be crafted to create tables and apply database-level constraints such as unique keys, foreign keys, and check constraints, ensuring data integrity at the database level.

## Construct a model for a table and apply model-level validations:

Models are created to represent tables in code, and model-level validations are applied to enforce business rules and data integrity within the application.

## Construct a seeder file to seed a table in the database:

Seeder files are created to populate database tables with initial data. These files contain code to insert predefined data into tables, aiding in development and testing.

## Commit and roll back migrations and seeders:

Migrations and seeders are version-controlled and can be committed to apply changes or rolled back to undo them. This helps manage and track changes to the database schema and data.

## Evaluate the history of migrations or seeders in their respective tables in the database:

Developers can review the history of applied migrations or seeders in the database to track changes, understand versioning, and troubleshoot issues related to database schema or data changes.

## Construct different kinds of migrations using the Sequelize documentation as a reference:

Sequelize documentation provides guidance on creating various types of migrations, including those for creating tables, altering columns, adding indexes, and performing other schema-related tasks. Developers can refer to this documentation for best practices and examples.
