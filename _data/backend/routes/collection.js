const express = require('express');
const router = express.Router();
const Whisky = require('../models/Whisky');

// GET all whiskies
router.get('/', async (req, res) => {
  try {
    const whiskies = await Whisky.find();
    res.json(whiskies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new whisky
router.post('/', async (req, res) => {
  const newWhisky = new Whisky(req.body);
  try {
    const savedWhisky = await newWhisky.save();
    res.status(201).json(savedWhisky);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
