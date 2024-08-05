const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const mongoURI = process.env.MONGO_URI || 'mongodb://admin:pass@mongo-dev:27017/auth?authSource=admin';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

