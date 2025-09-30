const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
