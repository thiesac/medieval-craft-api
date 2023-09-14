import Joi from 'joi';

const createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.string().required(),
});

export default createProductSchema;