import Joi from 'typesafe-joi';

export const validateSignUp = Joi.object()
  .keys({
    login: Joi.string().required(),
    password: Joi.string().required(),
  })
  .required();

export type TSignUp = Joi.Literal<typeof validateSignUp>;
