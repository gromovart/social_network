import Joi from 'joi';

export const validateSignIn = Joi.object().keys({
  login: Joi.string().required(),
  password: Joi.string().required(),
});
