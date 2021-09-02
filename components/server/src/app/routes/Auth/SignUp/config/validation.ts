import Joi from 'joi';

export const validateSignUp = Joi.object()
  .keys({
    firstName: Joi.string().required().example('Иван'),
    lastName: Joi.string().required().example('Иванов'),
    login: Joi.string().required().example('ivan@mail.ru'),
    password: Joi.string().required().example('some_password'),
    dateBirthday: Joi.string().required().example('19.01.1980'),
  })
  .required();
