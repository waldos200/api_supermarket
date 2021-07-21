require('dotenv').config();

module.exports = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT || 9000,
  SECRET_KEY: process.env.SECRET_KEY,
  ENV: process.env.NODE_ENV || 'development'
}