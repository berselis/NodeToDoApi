const express = require('express');
const server = express()
const PORT = 8706;
const taskRouter = require('./project/routers/task.router');

// to activate recive json format, express function. 
// default is stringify
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server OK!' })
})

server.use('/', taskRouter);

server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});








