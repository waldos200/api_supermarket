const { User } = require('../models');

const createUser = async (data) => await User.create(data);

module.exports = {
  createUser
};