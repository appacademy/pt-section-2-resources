const express = require("express");
const app = express();

app.get("/", express.static("./html/index.html"));

app.listen(5000, () => console.log("Sorry!"));
