require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.use("/owners", require("./routes/mainOwners"));
app.use("/dogs", require("./routes/dogs"));
app.use("/dogBreeds", require("./routes/dogBreeds"));

const port = 8001;
app.listen(port, () => console.log("Server-1 is listening on port", port));
