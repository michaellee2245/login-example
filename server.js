const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const users = require('./users');

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'] }))

app.get('/health',(req, res) => res.send('ok'));

app.get('/authenticate-user', (req,res) => {
    const email = req.query.email;
    const password = req.query.password;
    const userId = users.authenticateUser(email, password);

    if (userId) return res.send({ id: userId });
    return res.status(403).send('either email or password is incorrect');
})

app.get('/user/:id', (req,res) =>{
    const id = req.params.id;
    const user = users.findById(id);

    if (user) return res.send(user);
    return res.status(404).send(`user ${id} not found`);
})

app.listen(8080, function(){
    console.log(`http://localhost:${this.address().port}`);
})