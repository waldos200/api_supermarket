const { ENV, DB_URL, PORT } = require('../constants/config');

const ENVS = { 
  development: {
    db:
    {
      url: DB_URL,
    },
    port: PORT
  },
  test: {

  },
  producction: {
    db:
    {
      url: DB_URL,
    },
    port: PORT
  }
};

module.exports = ENVS[ENV]