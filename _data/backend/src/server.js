const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect to the nmwhisky database for newmake collection
mongoose.connect('mongodb://root:pass@192.168.1.159:27017/nmwhisky', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Connect to the whisky database for collection
mongoose.createConnection('mongodb://root:pass@192.168.1.159:27017/whisky', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Middleware and routes
app.use(express.json());
app.use('/collection', require('../routes/collection'));
app.use('/newmake', require('../routes/newmake'));

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port: 5000');
});
