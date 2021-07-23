const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/verify');

const homeRoutes = require('./home');
const signUpRoutes = require('./signup');
const userRoutes = require('./user');
const itemRoutes = require('./item');

router.use(homeRoutes);
router.use('/signup', signUpRoutes);
router.use('/user', AuthMiddleware, userRoutes);
router.use('/item', AuthMiddleware, itemRoutes);

module.exports =  router;