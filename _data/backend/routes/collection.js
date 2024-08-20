const express = require('express');
const router = express.Router();
const Whisky = require('../models/whisky.model');

// CREATE: Add a new whisky to the collection
router.post('/', async (req, res) => {
  try {
    const newWhisky = new Whisky(req.body);
    await newWhisky.save();
    res.status(201).json(newWhisky);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Get all whiskies
router.get('/', async (req, res) => {
  try {
    const whiskies = await Whisky.find();
    res.json(whiskies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Update an existing whisky
router.put('/:id', async (req, res) => {
  try {
    const updatedWhisky = await Whisky.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWhisky);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Remove a whisky from the collection
router.delete('/:id', async (req, res) => {
  try {
    await Whisky.findByIdAndDelete(req.params.id);
    res.json({ message: 'Whisky deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
