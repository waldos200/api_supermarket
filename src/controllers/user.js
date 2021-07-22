const { userService } = require('../services');

const returnUser = (req, res) => res.status(201).json({user: req.user});

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

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body

    const user = await userService.updateUserById(id, body);

    res.status(202).send({user});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.deleteUserById(id);

    res.status(200).send({user});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

module.exports = {
  returnUser,
  findUsers,
  findUserById,
  updateUserById,
  deleteUserById
}