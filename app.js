 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const app = express();

 mongoose.connect('mongodb://localhost:27017/backend')
 
 app.use(express.json());
 app.use(cors());

 require('./routes/routes')(app);

 module.exports = app;