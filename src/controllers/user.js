const { userService } = require('../services');

const returnUser =  (req, res) => { 
  res.status(201).json({user: req.user});
}

const findUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();

    res.status(200).send({users});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

module.exports = {
  returnUser,
  findUsers,
}