const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define collection and schema

let Admin = new Schema({
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
    collection: 'admins'
});

module.exports = mongoose.model('Admin', Admin);