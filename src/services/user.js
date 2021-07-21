const { User } = require('../models');

const createUser = async (data) => await User.create(data);

const findUserByEmail = async (email) => await User.findOne({email}).exec()

module.exports = {
  createUser,
  findUserByEmail
};