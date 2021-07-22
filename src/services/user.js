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
};

const findAllUsers = async () => {
  try {
    const users = await User.find({ }, '-password').exec();

    if (!users) throw ({error: new Error('Users not found'), messsage: 'Users not found'});

    return users;
  } catch (error) {
    throw error;
  }
}

const findUserById = async (id) => {
  try {
    const user = await User.findById(id).exec()
    
    if (!users) throw ({error: new Error('Users not found'), messsage: 'Users not found'});

    return user;
  } catch (error) {
    throw error;
  }
}

const updateUserById = async (id, data) => {
  try {
    const user = await User.findByIdAndUpdate(id, {$set: data}, {new: true} );

    if (!users) throw ({error: new Error('Users not found'), messsage: 'Users not found'});

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  findUserByEmail,
  findAllUsers,
  findUserById,
  updateUserById
};