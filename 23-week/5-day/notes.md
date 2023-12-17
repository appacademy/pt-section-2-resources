# Roles + Permissions & Scopes

## Roles and Permissions

- Permissions : Authorization for a specific user to execute a specific action on the server
  - Photographers can create photos, view any photos, edit any photo, delete any photo
  - Customers can view a photo they have purchased
- Roles : A set of Permissions granted to a set of Users
  - Admins can create photos, view any photos, edit any photo, delete any photo
  - Customers can view a photo they have purchased
  - Guest can view sample photos in the gallery

```js
if (user.isAdmin) {
  // modifies a photo
} else {
  // throw error
}
```

## Scopes

- Scopes allow use to reuse code by defining commonly used queries
- Most common use case is including or excluding model attributes
- 2 major types of scopes
  - Default scope: use this if it's going to be helpful in *all* or the *vast majority* of your endpoints that use the model
  - Non-default scope: use if it's going to helpful in one/a couple/a handful - AKA not the majority - of endpoints

Setting up scopes in Sequelize:

```js
class Book extends Model {}
Book.init({
    // Define attributes here
    }, {
    defaultScope: { // Default scope: Books that are not checked out
        where: {
            isCheckedOut: false
        },
        attributes: { // included attributes, all others are excluded
            include: [ "title", "author", "isCheckedOut", "location" ]
        }
    },
    scopes: {
        atLibrary(libraryId) { // Scope: Books in specified library
            const { Library } = require('../models');
            return {
                where: { // filter results to be only from the specified library
                    libraryId
                },
                include: [ // include associated library details in query results
                    { model: Library }
                ]
            }
        },
        atOtherLibrary(libraryId) { // Scope: Books NOT in specified library
            const { Library } = require('../models');
            return {
                where: { // filter results to NOT be from the specified library
                    libraryId: {
                        [Op.ne]: libraryId
                    }
                },
                include: [ // include associated library details in query results
                    { model: Library }
                ]
            }
        },
        checkedOut: { // Scope: Books that are checked out
            where: {
                isCheckedOut: true
            }
        }
    }
  }
);
```

Using scopes

```js
let books;
await Book.findAll(); // returns only the books that aren't checked out, due to defaultScope on the model
books = await Book.scope("checkedOut").findAll(); //get named scope
books = await Book.scope({ method: ["atLibrary", req.params.libraryId] }).findAll(); //get function scope
books = await Book.scope(["defaultScope", { method: ["atLibrary", req.params.libraryId] }]).findAll(); //get multiple scopes
books = await Book.unscoped().findAll(); // no scope, not even the default scope, applied
```

### Quiz

### Scope Practice
