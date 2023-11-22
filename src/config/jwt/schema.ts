import * as Joi from 'joi';

export const jwtConfigSchema = {
  JWT_EXPIRES_IN: Joi.string().default('1d'),
  JWT_SECRET: Joi.string().required(),
};
