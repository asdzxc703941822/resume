const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');
var app = express();
app.listen(3000);
app.use(express.static('./myproject'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowaHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/router', router);