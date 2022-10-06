const express = require('express');
const db = require('./project/utils/database');
const initModels = require('./project/models/initModels');
const server = express()
const { port } = require('./config');
const taskRouter = require('./project/routers/task.router');

// to activate recive json format, express function. 
// default is stringify
server.use(express.json());

db.authenticate()
    .then(() => console.log('Database authenticated, OK!'))
    .catch(error => console.log(error));

db.sync()
    .then(() => console.log('Database synced, OK!'))
    .catch(error => console.log(error));


initModels();

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server OK!' })
})
server.use('/', taskRouter);

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});








