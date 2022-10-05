const router = require('express').Router();

const taskServices = require('../services/task.service');


router.get('/task', taskServices.getTasks);

router.get('/task/:id', taskServices.getTask);

router.post('/task', taskServices.createTask);


module.exports = router;
