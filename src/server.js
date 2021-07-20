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
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error',(error) => console.log('FAILED TO CONNECT TO MONGO', error));
db.once('open', () => {
    console.log('SUPERMARKET API RUN...')
    app.listen(port, () => {
        console.log(`Server start on port ${port}`)
    });
});