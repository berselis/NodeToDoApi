const uuid = require('uuid');

const taskDB = [
    {
        id: 1,
        tittle: 'titulo de la tarea',
        status: 'Pendiente'
    },
    {
        id: 2,
        tittle: 'titulo de la tarea',
        status: 'Complete'
    }
];

const getAllTask = () => {
    return taskDB;
}

const getTaskById = (id) => {
    return taskDB.find(task => task.id == id);

}

const createTask = (tittle) => {
    const newTask = {
        id: uuid.v4(),
        tittle,
        status: 'created'
    };
    taskDB.push(newTask);
    return newTask;
}