import Joi from 'typesafe-joi';
import { Request } from '@hapi/hapi';

export type IDecoratedRequest<P = {}, Q = {}, C = {}, H = {}, R = {}> = {
  payload: P;
  query: Q;
  auth: {
    credentials: C;
  };
  headers: H;
  params: R;
} & Request;

export const validateSignUp = Joi.object()
  .keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().required(),
    dateBirthday: Joi.string().required(),
  })
  .required();

export type TSignUp = Joi.Literal<typeof validateSignUp>;
