// models/NewMake.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barrelSchema = new Schema({
  // Define the schema fields based on your data structure
  barrels: [
    {
      barrel_id: Number,
      style: String,
      capacity_liters: Number,
      last_topped_up: String,
      first_filled: String,
      last_bottled: String,
      previous_fill: [String],
      new_make: {
        remaining_quantity_liters: Number,
        abv_percentage: Number,
        last_batch_number: String,
        batch_volumes: [
          {
            batch_number: String,
            volume_liters: Number,
          },
        ],
      },
      bottlings: [
        {
          bottling_id: Number,
          status: String,
          finishing_wood: [String],
          bottle_date: String,
          bottle_abv_percentage: Number,
          contact_duration_days: Number,
          finishing_wood_weight_grams: Number,
        },
      ],
    },
  ],
});

const NewMake = mongoose.model('NewMake', barrelSchema, 'newmake');
module.exports = NewMake;
