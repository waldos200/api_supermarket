const {celebrate, Joi, Segments} = require('celebrate');

const password = Joi.string().required();
const email = Joi.string().email().required();

const login = celebrate({
  [Segments.BODY]: {
    email,
    password
  }
});

const create = celebrate({
  [Segments.BODY] :{
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email,
    birth_date: Joi.date(),
    gender: Joi.string().valid('male','female', 'other'),
    password
  }
});

module.exports = {
  create,
  login
}
