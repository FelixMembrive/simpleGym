const { DataTypes } = require("sequelize");
const db = require("../database")
const Treino = require("./DiaTreino")

const DiaTreino = db.define("DiaTreino", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    treino_id: {
        type: DataTypes.INTEGER,
        References: {
            model: Treino,
            key: "id",
        },
    }

}, { tableName: "dia_treino", timestamps: false, underscored: true });

module.exports = DiaTreino;