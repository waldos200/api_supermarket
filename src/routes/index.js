const express = require('express');
const router = express.Router();

const signUpRoutes = require('./signup');

router.use('/signup', signUpRoutes);

module.exports =  router;
