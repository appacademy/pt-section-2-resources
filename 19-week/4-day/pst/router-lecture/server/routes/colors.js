const express = require("express");

const colorRouter = express.Router();

colorRouter.use(express.json());

colorRouter.get("/", (req, res) => {
    res.json({
        message: "GET /colors",
    });
});

// colorRouter.get("/:name", (req, res) => {
//     res.json({
//         url: "colors",
//         name: req.params.name,
//     });
// });

colorRouter.get("/:name/css-styles", (req, res) => {
    const { name } = req.params;

    console.log(req.body);

    res.json({
        message: `POST /colors/:name/css-styles where name is ${name}`,
    });
});

module.exports = colorRouter;
