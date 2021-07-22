const express = require('express');
const router = express.Router();

const { userValidator } = require('../validators');
const { signUpController } = require('../controllers');

router.post('/', userValidator.create, signUpController.signUp);
router.post('/login', signUpController.logIn);

module.exports = router;