const sequelize = require("../utils/dbConnection");
const { DataTypes } = require("sequelize");

const department = sequelize.define("department", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = department;
