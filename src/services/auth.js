// const { authenticate, generateJWT } = require('../utils')
const auth = require('../utils/authenticate')
const generateJWT = require('../utils/generateJWT')

const login = async (data) => {
  try {
    const user = await auth(data);
    const token = generateJWT(user)
    
    return token
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  login
}