const uuid = require('uuid');
const Tasks = require('../models/tasks.models');

const getAllTasks = async () => {
    const data = await Tasks.findAll();
    return data;
}

const getTaskById = (id) => {
    return taskDB.find(task => task.id == id);

}

const createNewTask = (data) => {
    const newTask = {
        id: uuid.v4(),
        tittle: data.tittle,
        status: 'created',
        priorityLevel: data.priorityLevel,
        createAt: data.createAt
    };
    Tasks.create(newTask);
    return newTask;
}

// createNewTask({
//     tittle: "Hacer la compra",
//     priorityLevel: 1,
//     createAt: '2022-10-05'
// })


// 

module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask
}