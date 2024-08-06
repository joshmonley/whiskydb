const mongoose = require('mongoose');

const newMakeSchema = new mongoose.Schema({
  barrel_id: { type: Number, required: true },
  style: { type: String, required: true },
  capacity_liters: { type: Number, required: true },
  last_topped_up: { type: Date, required: true },
  first_filled: { type: Date, required: true },
  last_bottled: { type: Date, required: true },
  previous_fill: { type: [String], required: true },
  new_make: {
    remaining_quantity_liters: { type: Number, required: true },
    abv_percentage: { type: Number, required: true },
    last_batch_number: { type: String, required: true },
    batch_volumes: [{
      batch_number: { type: String, required: true },
      volume_liters: { type: Number, required: true }
    }]
  },
  bottlings: [{
    bottling_id: { type: Number, required: true },
    status: { type: String, required: true },
    finishing_wood: { type: [String], required: true },
    bottle_date: { type: Date, required: true },
    bottle_abv_percentage: { type: Number, required: true },
    contact_duration_days: { type: Number, required: true },
    finishing_wood_weight_grams: { type: Number, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('NewMake', newMakeSchema);
