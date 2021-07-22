const { userService } = require('../services');

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
  findUsers,
}