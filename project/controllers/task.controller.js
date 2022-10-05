const uuid = require('uuid');

const taskDB = [];

const getAllTasks = () => {
    return taskDB;
}

const getTaskById = (id) => {
    return taskDB.find(task => task.id == id);

}

const createNewTask = (tittle) => {
    const newTask = {
        id: uuid.v4(),
        tittle,
        status: 'created'
    };
    taskDB.push(newTask);
    return newTask;
}


module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask
}