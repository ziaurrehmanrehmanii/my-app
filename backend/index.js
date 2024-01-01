const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbCon = require('./db/dbCon');
const mongoose = require('mongoose');
const multer = require('multer');
require('dotenv').config();

// Initialize express
const app = express();

// Connect to MongoDB
dbCon();

// Middleware
// Parse JSON and URL encoded data into req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Allow CORS on all routes
app.use(cors());

// Models
const User = require('./db/Models/Users');
const Admin = require('./db/Models/Admins');







app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


mongoose.connection.once('open', () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
}
);
