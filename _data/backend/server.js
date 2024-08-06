const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://admin:pass@mongo-dev:27017/auth?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const NewMakeTracking = mongoose.model('NewMakeTracking', new mongoose.Schema({/* schema here */}));
const RetailWhiskyCollection = mongoose.model('RetailWhiskyCollection', new mongoose.Schema({/* schema here */}));

// Routes
app.get('/newmake', async (req, res) => {
  try {
    const data = await NewMakeTracking.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/newmake', async (req, res) => {
  // Handle creating new document
});

app.put('/newmake/:id', async (req, res) => {
  // Handle updating document
});

app.delete('/newmake/:id', async (req, res) => {
  // Handle deleting document
});

app.get('/collection', async (req, res) => {
  try {
    const data = await RetailWhiskyCollection.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/collection', async (req, res) => {
  // Handle creating new document
});

app.put('/collection/:id', async (req, res) => {
  // Handle updating document
});

app.delete('/collection/:id', async (req, res) => {
  // Handle deleting document
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
