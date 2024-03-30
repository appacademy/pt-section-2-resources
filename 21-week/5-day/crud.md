# CRUD in Sequelize

Oh _crud_, what's CRUD again?

* C: Create
* R: Read
* U: Update
* D: Delete



## R - Read: Select queries

Common 'finder' methods that exist on Sequelize models:

- findAll()

```js
const users = await User.findAll();
```

```sql
SELECT * FROM Users;
```

- findOne()

```js
const user = await User.findOne();
```

```sql
SELECT * FROM Users LIMIT 1;
```

- findByPk()

```js
const userOne = await User.findByPk(1);
```

```sql
SELECT * FROM Users WHERE id = 1;
```

### Specifying attributes/columns and applying WHERE clauses

Only returning certain attributes:

```js
const users = await User.findAll({
    attributes: ["firstName", "lastName", ["phoneNumber", "number"]]
});
```

```sql
SELECT firstName, lastName, phoneNumber AS number FROM Users;
```

```js
const gregs = await User.findAll({
    where: {
        firstName: "Greg"
    }
});
```

```sql
SELECT * FROM Users WHERE firstName = Greg;
```

### PRACTICE

## C - Create

### Option 1 build/save

```js
// Generate a new instance of the Dog model
const newDog = Dog.build({ dogName: "Fido", breed: "Dalmatian" })

// Insert the newDog instance into the database
await newDog.save();
```

### Option 2 create

```js
// Create a new instance of the Dog model and save the instance to the database
const newDog = await Dog.create({ dogName: "Fido", breed: "Dalmatian" })
```

### Creating multiple - should look familiar

```js
const newDog = await Dog.bulkCreate([
    { dogName: "Fido", breed: "Dalmatian" },
    { dogName: "Maggie", breed: "Golden Retriever" },
    { dogName: "Toby", breed: "Poodle" }
])
```

### PRACTICE - Insert

## U - Update

### Update single attribute

```js
// Find the record
const greatBlueHeron = await Bird.findOne({ where: { species: "Great Blue Heron" } });

// Update the attribute through re-assigning a value
greatBlueHeron.longitude = 81.623863;

// Save the updated record
await greatBlueHeron.save();
```

### Update multiple attributes with `set`

```js
// Find the record
const greatBlueHeron = await Bird.findOne({ where: { species: "Great Blue Heron" } });

// Update the attribute(s) using the set method
greatBlueHeron.set({
    longitude: 81.623863,
    latitude: 58.936047
});

// Save the updated record
await greatBlueHeron.save();
```

### Avoid having to `save` with `update`

```js
// Find the record
const greatBlueHeron = await Bird.findOne({ where: { species: "Great Blue Heron" } });

// Update only the longitude and latitude in the table
await greatBlueHeron.update({
    longitude: 81.623863,
    latitude: 58.936047
});
```

### We can update multiple records at once

```js
await Bird.update(
    { latitude: 70.0000, longitude: 130.333333 }, // attributes and values to update
    { where:
        { id: { [Op.or]: [1, 2] } }  // specific records to update
    }
);
```

## D - Deleting data with Sequelize

Single record deletion

```js
// Find the record by id
const greatBlueHeron = await Bird.findOne({ where: { id: 3 } });
// Delete the record using the destroy method
await greatBlueHeron.destroy(); // the one row is removed from the table
```

Mulitple records

```js
await Bird.destroy(
    { where:
        { id: { [Op.lte]: 2 } }  // specific records to delete
    }
);
```

### PRACTICE - update/delete

## Test results reading
