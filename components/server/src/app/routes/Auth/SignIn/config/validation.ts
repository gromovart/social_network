import Joi from 'joi';

export const validateSignIn = Joi.object().keys({
  login: Joi.string().required().example('ivan@mail.ru'),
  password: Joi.string().required().example('some_password'),
});
