const express = require('express');
const router = express.Router();

const { itemValidator } = require('../validators');
const { itemController } = require('../controllers');

router.post('/', itemValidator.create, itemController.create);
router.get('/', itemValidator.findByName, itemController.findByName);
router.get('/all', itemController.findItems);
router.get('/:id', itemController.findItemById);
router.put('/:id', itemValidator.update, itemController.updateItemById);
router.delete('/:id', itemValidator.update, itemController.deleteItemById);

module.exports = router;