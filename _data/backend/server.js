const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://admin:pass@mongo-dev:27017/auth?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

const newmakeSchema = new mongoose.Schema({
    barrels: Array
});

const collectionSchema = new mongoose.Schema({
    name: String,
    distillery: String,
    age: Number,
    abv: Number,
    volume: Number,
    price: Number,
    tastingNotes: String
});

const Newmake = mongoose.model('Newmake', newmakeSchema);
const Collection = mongoose.model('Collection', collectionSchema);

// CRUD operations for newmake
app.get('/api/newmake', async (req, res) => {
    const newmake = await Newmake.find();
    res.json(newmake);
});

app.post('/api/newmake', async (req, res) => {
    const newmake = new Newmake(req.body);
    await newmake.save();
    res.json(newmake);
});

app.put('/api/newmake/:id', async (req, res) => {
    const newmake = await Newmake.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(newmake);
});

app.delete('/api/newmake/:id', async (req, res) => {
    await Newmake.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

// CRUD operations for collection
app.get('/api/collection', async (req, res) => {
    const collection = await Collection.find();
    res.json(collection);
});

app.post('/api/collection', async (req, res) => {
    const collection = new Collection(req.body);
    await collection.save();
    res.json(collection);
});

app.put('/api/collection/:id', async (req, res) => {
    const collection = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(collection);
});

app.delete('/api/collection/:id', async (req, res) => {
    await Collection.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
