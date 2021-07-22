const { userService, authService } = require('../services');

const signUp = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    
    if (!user) throw { error: new Error('User not created'), messsage: 'User not created' };

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error)
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);

    const token = await authService.login({user, password});

    res.status(200).send({token});
  } catch (error) {
    console.error(error);
    res.status(400).json(error)
  }
}

module.exports = {
  signUp,
  logIn
};