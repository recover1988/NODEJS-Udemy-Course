"use strict";
const { DataTypes } = require("sequelize");
const { CLIENT_TABLE, ClientSchema } = require("../models/client.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(CLIENT_TABLE, "user_id", {
      field: "user_id",
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
