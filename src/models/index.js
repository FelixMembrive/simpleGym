const Treino = require("./Treino");
const DiaTreino = require("./DiaTreino");
const Usuario = require("./Usuario");

// DiaTreino.hasOne(Treino)
// Treino.belongsTo(DiaTreino, {
//     foreignKey: "treino_id",
// });

Treino.belongsTo(Usuario)
Usuario.hasMany(Treino)

// Treino.belongsTo(DiaTreino)
DiaTreino.hasMany(Treino)


// Usuario.hasMany(Treino, {
//     foreignKey: "cliente_codigo",
// });

// Filme.belongsToMany(Genero, {
//   foreignKey: "filme_codigo",
//   through: FilmeGenero,
// });
// Genero.belongsToMany(Filme, {
//   foreignKey: "genero_codigo",
//   through: FilmeGenero,
// });

module.exports = {
    Treino,
    DiaTreino,
    Usuario
};