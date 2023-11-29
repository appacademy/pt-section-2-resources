# Sequelize

- Why bother using Sequelize or any other ORM?
  - Allows us to use an object-oriented approach when interacting with data from our database
  - Data validation and safety
    - Helps protect against SQL inject attacks that we discussed yesterday
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

### PRACTICE - Setting up Sequelize in Express

## Migrations

- What is a migration?
  - A JS file that alters our database's schema
  - Includes 2 functions: an `up` and a `down` function
    - The `up` function makes the change to our database schema -> could be creating a whole new table, adding a column to an existing table, etc.
    - The `down` function will undo the changes made in the `up` function
- What's the point of using migrations?
  - Migrations can be thought of as "version control" for our database schema
    - Make a change and realize it was a mistake? Just run the down migration
  - Allows us to make changes to projects that are already in production without having to drop all of our database tables -> we would lose all of the previously stored data in our database in this scenario

### Database Constraints

- These are defined in the *MIGRATION* files.
- Common constraints we are already familiar with:
  - PRIMARY KEY
  - AUTOINCREMENT
  - UNIQUE
  - Data types:
    - TEXT
    - VARCHAR()
    - INTEGER
  - NOT NULL
  - DEFAULT VALUE

In sequelize, some of those would look like:

```javascript
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      hashedPassword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },);
  },
```

### PRACTICE - Create/Undo migrations

## Models

- The models class represents the entire table that it models, and an instance of that model class can represent a single record in the table.
- The model tells Sequelize information about the entity it represents such as the table name in the database and the different data types that it consists of.

### How to generate models

```bash
> npx sequelize model:generate --name User --attributes name:string
```

The above command would generate the following model file for us

```javascript
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of the Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```

It would also generate a migration for us

```javascript
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
```

### Model Validations

- Like database-level constraints, model-level validations are meant to ensure integrity of the data being put into your database.
  - Constraints are limited to a few key properties defined by SQL and are run in SQL
  - Validations are run in JS, and as a result, can be much more finely-tuned

```javascript
User.init({
    firstName: {
        type: Sequelize.STRING(20),
        validate: {
            is: /^[a-z]+$/i,          // matches this RegExp
            isAlpha: true,            // will only allow letters
            notNull: true,            // won't allow null
        }
    }
    // ...
})
```

In addition to those built-in validators, we can write custom validations:

```javascript
User.init({
    firstName: {
        type: Sequelize.STRING(20),
        validate: {
            // ...
            beginsWithCapital(value) {
                if(value[0] !== value[0].toUpperCase()) {
                    throw new Error("First name doesn't begin with a capital letter!");
                }
            }
        }
    }
    // ...
})
```

### PRACTICE + QUIZ - Models

## Seeders

We can generate using the CLI

```bash
> npx sequelize seed:generate --name <name of seed>
```

Has `up` and `down` fucntions like our migration files.

```javascript
// Import the model(s)
const { Person } = require('../db/models');

module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert into People using Person.bulkCreate:
    await Person.bulkCreate([
      {
        name: 'John Doe',
        isBetaMember: false
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    // Delete from People using queryInterface.bulkDelete:
    await queryInterface.bulkDelete(
      'People',
      {
        name: 'John Doe',
        isBetaMember: false
      }
    );
  }
};
```

Running a seed using the CLI

```bash
> npx dotenv sequelize db:seed:all
```
