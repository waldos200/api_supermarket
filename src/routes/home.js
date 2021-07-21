const express = require('express');
const router = express.Router();

// Home routes
router.get('/', ( req, res) => {
	res
		.status(200)
		.send('<h1>Welcome to the SuperMarket API</h1>')
})

module.exports = router;