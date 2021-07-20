const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { errors } = require('celebrate');
const mongoose = require('mongoose');

const { db: { url }, port } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(errors());

app.listen(8000, () => {
    console.log(`Server start on port ${8000}`)
});