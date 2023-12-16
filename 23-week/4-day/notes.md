# CSRF, JSON Web Tokens (JWTs), & Transactions

## CSRF - Cross-Site Request Forgery

Tricking a user of your site into giving up private information. There are two
main examples of CSRF attacks, both using a fake malicious site.

1. Your site does not have CORS implemented. The fake site requests for the
   user's email and password, then makes a request to your site with that info. Now
   the bad guy has access to the user's account.

2. The fake site asks for information, but does NOT make a request to your site.
   Instead, the info is stored for the bad guy to use later. This cannot be stopped
   through CORS.

We won't focus on stopping the second example. The first example has already
been addressed by CORS. However, CORS can be easy to bypass, and some clients
don't even support CORS, so CSRF Tokens help ensure our site is still secure.

1. Create two CSRF tokens - one encrypted and one decrypted.
2. Add the decrypted CSRF token to a cookie.
3. Add the encrypted CSRF token in a cookie that is HTTP-only (cannot be used by
   JavaScript) and Same-Site only (cannot be used by another web application)
4. Frontend can read the decrypted CSRF token cookie and add it into the headers
   of any request made to the backend
5. Backend reads the headers of the request and matches the decrypted CSRF token
   in the headers to the encrypted CSRF token in the cookies

Like CORS, we'll be adding a `csurf` package to our projects, and then adding it to our Express applications as a middleware

## JWT - JSON Web Tokens

A way to send information and verify it's integrity. JWTs have three parts, the
header, the payload, and the signature. A secret key is also required for a JWT
to work properly.

```js
// JWT format - each section is separated by a period
`${header}.${payload}.${signature}`
```

- Header describes the hashing algo the JWT is using
  - Header is encoded
- Payload holds the information we want to send
  - Payload is encoded
- Signature is the hash of the Header, Payload, and Secret Key
  - Signature is hashed

It's important to recognize the difference between encoding, encrypting, and
hashing

- Encoding: changing hard to read characters into readable characters

  - Anyone can easily encode and decode without a secret key

- Encryption: change information using a secret key to send data more securely

  - Anyone can decrypt a message if they have the secret key

- Hashing: a one way transformation of information using a secret key
  - A hash is irreversible, you will NEVER be able to retrieve the original
    information once hashed.
  - Hashing with the same input and secret key will **_always_** return the same
    output

JWTs are NOT meant to send secure information. The information is encoded, and
can be easily decoded back to it's original state. So passwords should NEVER be
transmitted using JWTs.

```js
base64Encode({ "alg": "HS256", "typ": "JWT" }) // header
  .base64Encode({ "email": "johnny@gmail.com" }) // payload
  .SHA1HASH(header + payload + "ILoveDogs") // signature

// Final JWT
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // encoded header
  .eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ // encoded payload
  .SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA // hashed signature
```

Instead, we use JWTs to verify the validity of a request. If it's been tampered
with, as in the body or header have changed, then the signature will not match.
If the source is a trusted resource (like your own site), then the signature
will match and be valid.

## SQL Transactions

- Often when working with a database, several operations need to be performed together in order to fully reflect an event occurring.
  - If only some of these operations are persisted, serious discrepancies can result.
  - We can think of SQL Transactions as making a series of SQL operations "All or Nothing"
- Classic example: a banking transaction
  - At least 2 distinct operations: Deducting funds from one account and adding them to another
  - If one of those operations were to fail, money would either disappear or be duplicated, depending on which side of the transfer was not persisted.

SQL syntax for transactions:

```sql
BEGIN TRANSACTION; -- Begins a transaction
  -- 1: Updating Alice's account
  UPDATE accounts SET balance = balance - 100.00
      WHERE name = 'Alice';
  SAVEPOINT alice_account; -- creates a point within a transaction that can be rolled back to other than the beginning of the transaction. The savepoint name can be used as a reference in later statements.

  -- 2: Updating Alice's branch
  UPDATE branches SET balance = balance - 100.00
      WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Alice');
  SAVEPOINT alice_branch;

  -- 3: Updating Bob's account
  UPDATE accounts SET balance = balance + 100.00
      WHERE name = 'Bob';
  SAVEPOINT bob_account;
  ROLLBACK TO alice_account; -- rolls back the transaction to the last COMMIT or ROLLBACK, or the named savepoint if provided, aborting all statements that have since occurred. If no previous COMMIT or ROLLBACK exists, the entire transaction is aborted.

  -- 4: Updating Bob's branch
  UPDATE branches SET balance = balance + 100.00
      WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Bob');
  SAVEPOINT bob_branch;
COMMIT; --  saves to the database all of the statements that have occurred since the last COMMIT or ROLLBACK statement.
```

## Transactions in Sequelize

- 2 approaches to transactions in Sequelize
  - Unmanaged transactions
    - A transaction object is first created and captured as a variable, typically `t`
    - A try/catch block can be used to attempt to perform all of the functionality needed for the transaction
    - At the end of the try block, the statements need to be committed, so call `t.commit()`
    - If at any point an error occurs, it will be caught in the catch block. At this point a `t.rollback()` function call can be used to roll the database back to its original state before the transaction started.
  - Managed transactions
    - In a managed transaction, instead of creating a transaction object separately, a callback is passed to `sequelize.transaction`, with the transaction object `t` captured as an argument.
    - With the managed approach, there is no need to manually call the `commit` or `rollback` methods of the transaction object.

```js
// managed transaction
const sequelize = require("sequelize");

try {

  const result = await sequelize.transaction(async (t) => {

    const user = await User.create({
      firstName: 'Abraham',
      lastName: 'Lincoln'
    }, { transaction: t });

    await user.setShooter({
      firstName: 'John',
      lastName: 'Boothe'
    }, { transaction: t });

    return user;

  });

  // If the execution reaches this line, the transaction has been committed successfully
  // `result` is whatever was returned from the transaction callback (the `user`, in this case)

} catch (error) {

  // If the execution reaches this line, an error occurred.
  // The transaction has already been rolled back automatically by Sequelize!

}
```