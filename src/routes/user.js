const express = require('express');
const router = express.Router();

// const { userValidator } = require('../validators');
const { userController } = require('../controllers');

router.get('/all', userController.returnUser);
router.get('/all', userController.findUsers);
router.get('/:id', userController.findUserById);

module.exports = router;