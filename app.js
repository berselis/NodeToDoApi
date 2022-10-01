const express = require('express');
const app = express(), PORT = 3000;

// to activate recive json format, express function. 
// default is stringify
app.use(express.json())



app.get('/', (req, res) => {

    res.status(200).send(req);
});


app.post('/', (req, res) => {
    const body = req.body;

    res.status(200).send(`<h2>Server OK!!! ${req.method}</h2>`);
});


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});








