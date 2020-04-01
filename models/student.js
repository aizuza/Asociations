const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db'); // <- cargar la conexion con la base de datos

const Model = Sequelize.Model; // <- pasa el modelo a una variable llamada modelo




// van dos objetos "{}"
class Student extends Model {};

Student.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'student'
});

module.exports = { Student };