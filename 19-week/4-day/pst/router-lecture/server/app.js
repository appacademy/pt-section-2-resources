const express = require("express");
const app = express();

app.use(express.json());

const peopleRouter = require("./routes/people");
const colorRouter = require("./routes/colors");
const aiRouter = require("./routes/ai");

app.use("/people", peopleRouter);
app.use("/colors", colorRouter);
app.use("/ai", aiRouter);


// app.use((err)) // ERROR
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
