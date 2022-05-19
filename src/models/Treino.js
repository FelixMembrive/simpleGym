const { DataTypes } = require("sequelize");
const db = require("../database");
const Usuario = require("./Usuario");

const Treino = db.define("Treino", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        References: {
            model: Usuario,
            key: "id",
        },
    },
}, { tableName: "treino", timestamps: false, underscored: true });

module.exports = Treino