const JWT = require('jsonwebtoken');
const { SECRET_KEY } = require('../constants/config')
const { userService } = require('../services')


module.exports = async (req, res, next) => {
	const AUTH = req.get('Authorization');
	try {
		if (AUTH) {
			const token = AUTH.replace('SPM ', "");
			const payload = JWT.verify(token, SECRET_KEY);
			console.log(payload)
			if (payload) {
				const { email } = payload;
				const user =  await userService.findUserByEmail(email);

				req.user = user;
				next();
			}
		} else {
			throw ({error: new Error('Header not found'), messsage: 'Header not found'});
		}
	} catch (error) {
			console.log(error);
			res.status(400).json(error);
	}
}