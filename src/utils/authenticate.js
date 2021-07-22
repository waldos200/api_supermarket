const bcrypt = require('bcrypt');

module.exports = ({ user, password } ) => {
	return new Promise(async (resolve, reject) => {
    bcrypt.compare(password, user.password, function(err, same){
      if(!same) reject({error: new Error('Invalid Password'), messsage: 'Error Credentials'});

      resolve({same, user});
    })
  })
};