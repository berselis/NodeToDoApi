const { getAllTasks, getTaskById, createNewTask } = require('../controllers/task.controller');


const getTasks = (req, res) => {
    const data = getAllTasks();
    res.status(200).json(data);
}

const getTask = (req, res) => {
    const id = req.params.id;
    const data = getTaskById(id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ id: id, message: 'Invalid Id' })
    }
}

const createTask = (req, res) => {
    const { tittle } = req.body;

    if (tittle) {
        const data = createNewTask(tittle);
        res.status(201).json(data)
    }

}


module.exports = {
    getTask,
    getTasks,
    createTask
}
