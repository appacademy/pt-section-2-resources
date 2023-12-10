require("express-async-errors");
require("dotenv").config();
const express = require("express");
const { WarehouseItem } = require("./db/models");

const app = express();

app.use(express.json());

app.get("/items", async (req, res) => {
  const items = await WarehouseItem.findAll({
    where: { isUsed: false },
  });
  return res.json(items);
});

app.put("/items/:id", async (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name, price, quantity, isUsed } = req.body;
  const item = await WarehouseItem.findByPk(itemId);
  if (!item) {
    return res.status(404).json({ message: "Warehouse Item not found" });
  }
  await item.update({name, price, quantity, isUsed});
  return res.json(item);
});

app.get("/items/:name", async (req, res) => {
  const {name} = req.params;
  const item = await WarehouseItem.findOne({
    where: {name}
  });
  if (!item) {
    return res.status(404).json({ message: "Warehouse Item not found" });
  };
  return res.json(item)
});

app.delete("/items/:id", async (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = await WarehouseItem.findByPk(itemId);
  if (!item) {
    return res.status(404).json({ message: "Warehouse Item not found" });
  }
  await item.destroy();
  return res.json({message: "Successfully deleted"})
})

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log("Server-3 is listening on port", port));
} else {
  module.exports = app;
}
