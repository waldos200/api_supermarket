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

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findUserById(id)

    res.status(202).send({user});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

module.exports = {
  returnUser,
  findUsers,
  findUserById
}