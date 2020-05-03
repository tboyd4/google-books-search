const mongoose = require('mongoose');

const mongoDb = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDb, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;