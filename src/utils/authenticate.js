const bcrypt = require('bcrypt');
const { userService } = require('../services');

module.exports = ({email, password}) => {
	return new Promise(async (resolve, reject) => {
    console.log(userService)
		const user = await userService.findUserByEmail(email);

    if (!user) reject({error: new Error('User not found'), messsage: 'Error Credentials'});
    
    if (user) {
      bcrypt.compare(password, user.password, function(err, same){
        if(!same) reject({error: new Error('Invalid Password'), messsage: 'Error Credentials'});

        resolve({same, user});
      })
      }
    })
};