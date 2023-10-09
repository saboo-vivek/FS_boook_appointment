const Sequelize = require("sequelize");
const sequelize = require("./db_config");

const User = sequelize.define("user", {
   name: Sequelize.STRING,
   phone: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
   },
   datetime: {
      type: Sequelize.DATE,
      allowNull: false,
   },
});

module.exports = User;
