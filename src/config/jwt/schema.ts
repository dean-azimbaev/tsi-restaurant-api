import * as Joi from 'joi';

export const jwtConfigSchema = {
  JWT_EXPIRES_IN: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
};
