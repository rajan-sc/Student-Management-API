const { DataTypes } = require("sequelize");

const sequelize = require("../utils/dbConnection");


const idCard = sequelize.define("idCard", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cardNo: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    }
});

module.exports = idCard;
