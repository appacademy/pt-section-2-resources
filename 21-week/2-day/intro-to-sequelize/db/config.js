const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

module.exports = {
    dbSetUp: createDB,
  };

  
function createDB() {
    console.log("\nCreating the DB..");
    return (db = new sqlite3.Database(
      process.env.DB_URL,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          console.error(err.message);

        } else {
          console.log("Connected to the SQLite database.");
          runMigrations();
        }
      }
    ));
  }

  function runSeeders() {
    console.log("\nRunning seeders..");
    db.serialize(() => {
      const sqlFilePath = path.join(__dirname, "../db/seeders.sql");
      fs.readFile(sqlFilePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading SQL file", err);

        }
        db.serialize(() => {
          const sqlStatements = data.split(/;\s*$/m);
          for (const statement of sqlStatements) {
            if (statement.trim().length > 0) {
              db.run(statement, (err) => {
                if (err) {
                  console.error("Error executing SQL: ", err);

                }
              });
            }
          }
          console.log("All set 🔥")
        });
      });
    });
  }

  function runMigrations() {
    console.log("\nRunning migrations..");
    db.serialize(() => {
      const sqlFilePath = path.join(__dirname, "../db/migrations.sql");
      fs.readFile(sqlFilePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading SQL file", err);

          return;
        }
        db.serialize(() => {
          const sqlStatements = data.split(/;\s*$/m);
          for (const statement of sqlStatements) {
            if (statement.trim().length > 0) {
              db.run(statement, (err) => {
                if (err) {
                  console.error("Error executing SQL: ", err);

                }
              });
            }
          }
        });
        console.log("All set 🔥")
        runSeeders();
      });
    });
  }
