import Joi from 'joi';

export const validateSignUp = Joi.object()
  .keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().required(),
    dateBirthday: Joi.string().required(),
  })
  .required();
