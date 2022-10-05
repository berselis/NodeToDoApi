const { Sequelizer } = require('sequelize');

const db = new Sequelizer({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'task_crud'
})

module.exports = db;