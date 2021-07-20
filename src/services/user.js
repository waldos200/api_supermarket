const { User } = require('../models');

const createUser = async(data) => User.create(data);

module.exports = {
    createUser,
};