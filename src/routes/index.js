const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const signUpRoutes = require('./signup');

router.use(homeRoutes);
router.use('/signup', signUpRoutes);

module.exports =  router;