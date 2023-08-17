const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://finalproject:2023@cluster0.jyn26uz.mongodb.net/');

module.exports = mongoose.connection;
