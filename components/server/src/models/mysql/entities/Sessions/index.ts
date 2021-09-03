import Joi from 'typesafe-joi';
import { BaseEntity } from '../lib/Base';

export const validateSession = Joi.object()
  .keys({
    token: Joi.string().required().example('some_token'),
    userId: Joi.number().required().example(1),
    blocked: Joi.bool().required().example(false),
  })
  .required();

export type TSession = Joi.Literal<typeof validateSession>;

export default class Sessions extends BaseEntity implements TSession {
  public token: string;

  public userId: number;

  public blocked: boolean;

  constructor(data: TSession) {
    super();
    this.token = data.token;
    this.userId = data.userId;
    this.blocked = data.blocked;
  }
}
