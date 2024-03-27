# Sequelize

- Why bother using Sequelize or any other ORM?
  - Allows us to use an object-oriented approach when interacting with data from our database
  - Data validation and safety
    - Helps protect against SQL inject attacks
    - Allows us to validate data *before* the data gets to the database
      - This gives us flexibility in detecting bad data, handling these errors, and ultimately communicating with your end users about corrections that need to be made.

  - Built-in query efficiency
  - Helps to model relationships and associate data across different models

## Components of Sequelize

- Models
  - JS file - Like a "blueprint" for the data that is contained within a *table* in the database.
- Migrations
  - JS file that defines a specific change to a database schema
  - Needs to be aligned with the information contained in the model
    - Sequelize can automatically generate migration files to match the models that you define
- Seeds
  - Seeder files are data files that you can use to populate a test database

## Commands
 `npx dotenv node app.js`
