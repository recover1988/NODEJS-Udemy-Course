const getConnection = require("../libs/postgres");
const { models } = require("../libs/sequelize");

const getAllUser = async (req, res) => {
  const response = await models.User.findAll();
  return response;
};

module.exports = {
  getAllUser,
};
