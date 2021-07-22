const { authenticate, generateJWT } = require('../utils')

const login = async (data) => {
  try {
    const { user } = await authenticate(data);

    const token = await generateJWT(user);

    return token
  } catch (error) {
    throw error;
  }
}

module.exports = {
  login
}