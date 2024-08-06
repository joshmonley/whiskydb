const express = require('express');
const router = express.Router();
const NewMake = require('../models/NewMake');

// GET all new makes
router.get('/', async (req, res) => {
  try {
    const newMakes = await NewMake.find();
    res.json(newMakes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new make
router.post('/', async (req, res) => {
  const newMake = new NewMake(req.body);
  try {
    const savedNewMake = await newMake.save();
    res.status(201).json(savedNewMake);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
