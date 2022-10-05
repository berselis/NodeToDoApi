const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Tasks = db.define('tasks', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priorityLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'priority_level'
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'create_at'
    }
});

module.exports = Tasks;