const { model } = require("mongoose");
const itemSchema = require("../schemas/item-schema");

const Item = model("Item", itemSchema);

module.exports = Item;
