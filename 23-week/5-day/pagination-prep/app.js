require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static('frontend'));

app.use(express.json());

app.use("/owners", require("./routes/mainOwners"));
app.use("/pets", require("./routes/pets"));


const port = 8001;
app.listen(port, () => console.log("Server-1 is listening on port", port));
