const { userService } = require('../services');

const UserCreate = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    
    if (!user) throw { error: new Error('User not created'), messsage: 'User not created' };

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error)
  }
};

module.exports = {
  UserCreate
};