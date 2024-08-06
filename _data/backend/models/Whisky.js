const mongoose = require('mongoose');

const whiskySchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  distillery: { type: String, required: true },
  type: { type: String, required: true },
  region: { type: String, required: true },
  abv: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Whisky', whiskySchema);
