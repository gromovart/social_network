import Joi from 'typesafe-joi';

export const validateUser = Joi.object()
  .keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    dateBirthday: Joi.string().required(),
    avatar: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().required(),
    salt: Joi.string().required(),
  })
  .required();

export type TUser = Joi.Literal<typeof validateUser>;

export default class User implements TUser {
  public firstName: string;

  public lastName: string;

  public login: string;

  public password: string;

  public dateBirthday: string;

  public avatar: string;

  public salt: string;

  constructor(data: TUser) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.login = data.login;
    this.password = data.password;
    this.dateBirthday = data.dateBirthday;
    this.avatar = data.avatar;
    this.salt = data.salt;
  }
}
