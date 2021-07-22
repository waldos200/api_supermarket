const express = require('express');
const router = express.Router();

const { userValidator } = require('../validators');
const { userController } = require('../controllers');

router.get('/', userController.returnUser);
router.get('/all', userController.findUsers);
router.get('/:id', userController.findUserById);
router.put('/:id', userValidator.update, userController.updateUserById);
router.delete('/:id', userValidator.update, userController.deleteUserById);

module.exports = router;