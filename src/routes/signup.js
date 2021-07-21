const express = require('express');
const router = express.Router();

const { userValidator } = require('../validators');
const { userController } = require('../controllers');

router.post('/', userValidator.create, userController.UserCreate);

module.exports = router;
