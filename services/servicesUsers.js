const { boom } = require("@hapi/boom");
const getConnection = require("../libs/postgres");
const { models } = require("../libs/sequelize");

const getAllUser = async () => {
  const response = await models.User.findAll();
  return response;
};

const findOne = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (body) => {
  try {
    const newUser = await models.User.create(body);
    return {
      user: newUser,
      message: "User Created",
    };
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async ({ id, body }) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return {
        error: "User not found",
      };
    }
    const response = await user.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await models.User.findOne({ id });
    await user.destroy();
    return {
      message: "user deleted",
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  findOne,
};
