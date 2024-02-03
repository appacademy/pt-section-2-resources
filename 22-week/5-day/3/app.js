require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { WarehouseItem } = require("./db/models");

app.get("/items", async (req, res) => {
    const allUnusedItems = await WarehouseItem.findAll({
        where: {
            isUsed: false,
        },
    });

    return res.json(allUnusedItems);
});

app.put("/items/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity, isUsed } = req.body;

    const itemToUpdate = await WarehouseItem.findByPk(id);

    if (!itemToUpdate) {
        return res.status(404).json({
            message: "Warehouse Item not found",
        });
    }

    await itemToUpdate.update({
        name,
        price,
        quantity,
        isUsed,
    });

    return res.json(itemToUpdate);
});

if (require.main === module) {
    const port = 8003;
    app.listen(port, () => console.log("Server-3 is listening on port", port));
} else {
    module.exports = app;
}
