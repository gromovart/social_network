import Joi from 'joi';

export const validateSignIn = Joi.object().keys({
  login: Joi.string().required().example('ivan@mail.ru'),
  password: Joi.string().required().example('some_password'),
});

export const resultModel = Joi.object({
  token: Joi.string().example('some_token'),
}).label('Result');

export const resultHTTPStatus = {
  '200': {
    description: 'Success',
    schema: resultModel,
  },
  '400': {
    description: 'Bad Request',
  },
  '404': {
    description: 'Sum not found',
  },
  '500': {
    description: 'Internal Server Error',
  },
};
