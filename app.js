 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const bodyParser = require('body-parser');
 const app = express();

 mongoose.connect('mongodb://localhost:27017/backend')
 
 app.use(express.json());
 app.use(cors());
 app.use(bodyParser.json());

 require('./routes/routes')(app);

 module.exports = app;