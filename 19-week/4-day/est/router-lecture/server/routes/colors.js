const express = require("express");
const colorRouter = express.Router();

colorRouter.use("/people", express.json());

colorRouter.get("/", (req, res) => {
    res.json({
        message: "GET /colors",
    });
});

colorRouter.get("/people", (req, res) => {
    res.json({
        message: "GET /colors/people",
    });
});

colorRouter.post("/people", (req, res) => {
    console.log(req.body);

    res.json({
        message: "GET /colors/people",
    });
});

colorRouter.get("/:name", (req, res) => {
    const { name } = req.params;

    res.json({
        path: `GET /colors/:name with name being ${name}`,
    });
});

colorRouter.post("/:name/css-styles", (req, res) => {
    console.log(req.body);

    res.send("This be da color css style yeah");
});

module.exports = colorRouter;
