//concetar a la base de datos

const Sequelize = require('sequelize').Sequelize;

let sequelize = new Sequelize('associations', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ', err);
    });



module.exports = {
    sequelize
}

const { Student } = require('./../models/student'); // cargando el modelo
const { Group } = require('./../models/group'); // cargando el modelo
const { Documentation } = require('./../models/documentation');
const { Project } = require('./../models/project');


//Association
//one to one
Student.hasOne(Documentation);

//One-to-many
Group.hasMany(Student);
Student.belongsTo(Group);

//Many-to-many
Student.belongsToMany(Project, { through: 'StudentProject' });
Project.belongsToMany(Student, { through: 'StudentProject' });



sequelize.sync(); // sincroniza los modelos a la base de datos

//Callback -> Promise -> async/await
(async() => {


    // create group
    //await Group.create({ name: '4to' });

    //Query existing Group
    // let group4 = await Group.findOne({
    //     where: {
    //         name: '4to'
    //     }
    // });

    // //Print a Group
    // console.log(JSON.stringify(group4));

    // //Print a Group's name
    // console.log(group4.name);

    //Create students
    //let group4 = await Group.findOne({
    //where: {
    //name: '4to'
    //}
    //});

    //let cubano = await Student.create({ name: 'cubano' });
    //let juan = await Student.create({ name: 'juan' });
    //let erick = await Student.create({ name: 'erick' });
    //let jesi = await Student.create({ name: 'jesi' });
    //let pedro = await Student.create({ name: 'pedro' });
    //let benji = await Student.create({ name: 'benji' });

    //group4.setStudents([pedro, cubano, juan, erick, jesi, benji]);

    //    await group4.save();

    //Update Student name

    //let benji = await Student.findOne({
    //where: {
    //name: 'benji'
    //}
    //});
    //benji.name = 'Benji';
    //await benji.save();

    //Delete Student

    // let erick = await Student.findOne({
    //     where: {
    //         name: 'Erick'
    //     }
    // })

    // await erick.destroy();

    //Create and "link" one-to-one

    // let benji = await Student.findOne({
    //     where: {
    //         name: 'benji'
    //     }
    // });

    // let benjisDocumentation = await Documentation.create({
    //     name: 'Benji Documentation'
    // });

    // benji.setDocumentation(benjisDocumentation);
    // await benji.save();


    //Create and assign a Project

    let pr1 = await Project.create({
        name: 'Proyecto Parcial 1'
    });

    let pr2 = await Project.create({
        name: 'Proyecto Parcial 2'
    });

    let benji = await Student.findOne({
        where: {
            name: 'Benji'
        }
    });

    let pedro = await Student.findOne({
        where: {
            name: 'Pedro'
        }
    });

    pr1.setStudents([benji, pedro]);


})();