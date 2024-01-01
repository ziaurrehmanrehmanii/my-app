const mongoose = require('mongoose');
require('dotenv').config();

const dbCon = () => {
    mongoose.connect(process.env.DB)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.log('Failed to connect to MongoDB:', err);
        });
}

module.exports = dbCon;