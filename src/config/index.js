const { ENV, DB_URL, PORT } = require('../constants/config');

const NODE_ENV = ENV;

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
}

module.exports = ENVS[NODE_ENV]