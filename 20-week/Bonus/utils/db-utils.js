const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

require("dotenv").config();

module.exports = {
  dbSetUp: createDB,
  freshnessCheck: freshnessCheck,
  seeTablesAndColumns: getColumnInfoForAllTables,
  sweetAndSour: sweetAndSour,
  removeVeggies: deleteVeggies,
  dogePrices: dogePrices
};
function createDB() {
  console.log("\nCreating the DB..");
  return (db = new sqlite3.Database(
    process.env.DB_URL,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        console.error(err.message);
        next(err)
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
        next(err);
      }
      db.serialize(() => {
        const sqlStatements = data.split(/;\s*$/m);
        for (const statement of sqlStatements) {
          if (statement.trim().length > 0) {
            db.run(statement, (err) => {
              if (err) {
                console.error("Error executing SQL: ", err);
                next(err)
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
        next(err)
        return;
      }
      db.serialize(() => {
        const sqlStatements = data.split(/;\s*$/m);
        for (const statement of sqlStatements) {
          if (statement.trim().length > 0) {
            db.run(statement, (err) => {
              if (err) {
                console.error("Error executing SQL: ", err);
                next(err)
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

function freshnessCheck(req, res, next) {
  console.log("\nRunning 04 Bullish Bananas");
  const sqlFilePath = path.join(
    __dirname,
    "../db/queries/04-bullish-bananas.sql"
  );
  fs.readFile(sqlFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading SQL file", err);
      next(err);
    }
    let sql = data;
    db.all(sql, [], (err, dbData) => {
      if (err) {
        console.error("Error reading SQL file", err);
        next(err);
      }
      req.customBody = `<ul> ${dbData
        .map((obj) => {
          return `<li>${JSON.stringify(obj)}</li>`;
        })
        .join("")}</ul>`;
    });
  });
  setTimeout(() => {
    console.log("All set 🔥")
    next();
  }, 500);
}

function sweetAndSour(req, res, next) {
  console.log("\nRunning 01 Sweet And Sour");
  const sqlFilePath = path.join(
    __dirname,
    "../db/queries/01-sweet-and-sour.sql"
  );
  fs.readFile(sqlFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading SQL file", err);
      next(err);
    }
    let sql = data;
    db.all(sql, [], (err, dbData) => {
      if (err) {
        console.error("Error reading SQL file", err);
        next(err);
      }
      req.customBody = `<ul> ${dbData
        .map((obj) => {
          return `<li>${JSON.stringify(obj)}</li>`;
        })
        .join("")}</ul>`;
    });
  });
  setTimeout(() => {
    console.log("All set 🔥")
    next();
  }, 500);
}

function deleteVeggies(req, res, next) {
  console.log("\nRunning 03 Remove Veggie Baskets");
  const sqlFilePath = path.join(
    __dirname,
    "../db/queries/03-remove-veggie-baskets.sql"
  );
  fs.readFile(sqlFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading SQL file", err);
      next(err);
    }
    let sql = data;
    db.all(sql, [], (err, dbData) => {
      if (err) {
        console.error("Error reading SQL file", err);
        next(err);
      }
      req.customBody = `<ul> ${dbData
        .map((obj) => {
          return `<li>${JSON.stringify(obj)}</li>`;
        })
        .join("")}</ul>`;
    });
  });
  setTimeout(() => {
    console.log("All set 🔥")
    next();
  }, 500);
}

function dogePrices(req, res, next) {
  console.log("\nRunning 02 Doge Price Check");
  const sqlFilePath = path.join(
    __dirname,
    "../db/queries/02-doge-price-check.sql"
  );
  fs.readFile(sqlFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading SQL file", err);
      next(err);
    }
    let sql = data;
    db.all(sql, [], (err, dbData) => {
      if (err) {
        console.error("Error reading SQL file", err);
        next(err);
      }
      req.customBody = `<ul> ${dbData
        .map((obj) => {
          return `<li>${JSON.stringify(obj)}</li>`;
        })
        .join("")}</ul>`;
    });
  });
  setTimeout(() => {
    console.log("All set 🔥")
    next();
  }, 500);
}




function getColumnInfoForAllTables(req, res, next) {
  console.log("\nRunning Schema Visualizaiton..");
  db.all(
    "SELECT name FROM sqlite_master WHERE type='table'",
    [],
    (err, tables) => {
      if (err) {
        console.error("Error fetching tables", err);
        return;
      }

      req.schemaInfo = {};
      console.log("TABLES", tables)
      if(!tables.length){
        res.send("There don't appear to be any tables yet.  Ensure you've added your tables to .db/migrations.sql" + "<div>Restart your server to apply updates from migrations.sql</div>" +"<div>Remember to add DROP TABLES IF exists if you get rid of a table.  Also, consider deleting your dev.db file if you're unsure.</div>" +"<div><a href='/'>Return Home</a></div>")
      }
      tables.forEach((table) => {
        const tableName = table.name;
        db.all(`PRAGMA table_info(${tableName})`, [], (err, columns) => {
          if (err) {
            console.error(`Error fetching columns for table ${tableName}`, err);
            next(err);
          }
          req.schemaInfo[tableName] = columns;
        });
      });
    }
  );

  setTimeout(() => {
    console.log("All set 🔥")
    next();
  }, 250);
}
