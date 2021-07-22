const { User } = require('../models');

const createUser = async (data) => await User.create(data);

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({email}).exec()

    if (!user) throw ({error: new Error('User not found'), messsage: 'Error Credentials'});

    return user;
  } catch (error) {
    throw error;
  }
} 

module.exports = {
  createUser,
  findUserByEmail
};