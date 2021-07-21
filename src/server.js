const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const routes = require('./routes');

const { db: { url }, port} = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'));
app.use('/api/v1', routes);
app.use(errors())

mongoose.connect(url, {
  useCreateIndex: true, 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log('FAILED to connect to mongo', error));
db.once('open', () => {
  console.log('SUPERMARKET API RUN ...')
  app.listen(port, () => {
    console.log(`Server start on port ${port}`)
  })
});