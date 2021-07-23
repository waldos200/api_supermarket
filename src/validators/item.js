const { celebrate, Joi, Segments } = require('celebrate');

const create = celebrate({
  [Segments.BODY] :{
    name: Joi.string().required(),
    price: Joi.number(),
    stock: Joi.number(),
  }
});

/* const findByName = celebrate({
  [Segments.QUERY] :{
    name: Joi.string().required(),
  }
}); */

/* const update = celebrate({
  [Segments.BODY] :{
    name: Joi.string(),
    price: Joi.number(),
    stock: Joi.number(),
  }
}); */

module.exports = {
  create,
/*   findByName,
  update */
}