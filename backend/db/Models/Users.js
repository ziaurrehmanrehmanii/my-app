const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', User);