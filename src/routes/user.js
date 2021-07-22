const express = require('express');
const router = express.Router();

// const { userValidator } = require('../validators');
const { userController } = require('../controllers');

router.get('/all', userController.findUsers);

module.exports = router;