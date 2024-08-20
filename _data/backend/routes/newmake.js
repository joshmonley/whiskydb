const express = require('express');
const router = express.Router();
const NewMake = require('../models/NewMake');  // Adjust the path to your NewMake model

// CREATE: Add a new entry to the newmake collection
router.post('/', async (req, res) => {
  try {
    const newEntry = new NewMake(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Get all entries from newmake collection
router.get('/', async (req, res) => {
  try {
    const entries = await NewMake.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Update an existing entry in newmake collection
router.put('/:id', async (req, res) => {
  try {
    const updatedEntry = await NewMake.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Remove an entry from the newmake collection
router.delete('/:id', async (req, res) => {
  try {
    await NewMake.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
