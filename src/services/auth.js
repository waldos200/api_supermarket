const { authenticate, generateJWT } = require('../utils')

const login = async (data) => {
  try {
    console.log(data);
    const user = await authenticate(data);
    const token = await generateJWT(user);

    return token
  } catch (error) {
    throw error;
  }
}

module.exports = {
  login
}