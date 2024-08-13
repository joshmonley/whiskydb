const mongoose = require('mongoose');

const whiskySchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  abv: Number,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('Whisky', whiskySchema, 'collection'); 
// The third parameter 'collection' specifies the MongoDB collection name
