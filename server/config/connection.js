const path = require('path');
const dotenvPath = path.resolve(__dirname, '../.env');

require('dotenv').config({ path: dotenvPath });

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;