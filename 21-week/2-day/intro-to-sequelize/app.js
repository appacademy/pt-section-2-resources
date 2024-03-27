let express = require("express");
const path = require("path");
const { dbSetUp } = require("./db/config.js");
let app = express();
let db = dbSetUp();

const colorRouter = require("./routes/colors");
app.use(express.json());
app.use("/colors", colorRouter);



app.get("/", (req, res) => {
  res.send("Hello World!");
});





let port = process.env.PORT;
app.listen(port, () =>
  console.log(`Fruit basket server is running on port ${port}...`)
);
