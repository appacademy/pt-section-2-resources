const express = require("express");

const app = express();

app.use(express.json());

let myMiddleWare = (req, res, next) => {
  console.log("I'm some middleware");
  next()
};

app.use(myMiddleWare)

let myMiddleWare2 = (req, res, next) => {
    res.status(404)
    console.log("I'm some middleware");
    next()
  };

app.use(myMiddleWare2)

app.get("/", (request, response) => {

  response.send("cool");
});

let port = 3000;

app.listen(port, () => console.log(`We're running on port: ${port}`));
