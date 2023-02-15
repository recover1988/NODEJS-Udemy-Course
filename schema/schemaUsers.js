const Joi = require("joi");

const id = Joi.string().integer();
const email = Joi.string().email();
const password = Joi.string().min(10);
const role = Joi.string().min(3);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role,
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
