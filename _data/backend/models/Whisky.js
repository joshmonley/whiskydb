// models/Whisky.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whiskySchema = new Schema({
  name: String,
  type: String,
  age: Number,
  abv: Number,
  price: Number,
  stock: Number,
});

const Whisky = mongoose.model('Whisky', whiskySchema, 'collection');
module.exports = Whisky;
