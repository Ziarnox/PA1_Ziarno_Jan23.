const mongoose = require('mongoose');
const express = require('express');
let toDo = require('./model/Todo');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

mongoose.connect('mongodb+srv://Ziarnox:Ziarnox12345@cluster0.dek32na.mongodb.net/');



app.post('/api/todo', (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const comment = req.body.comment;
    const createdAt = Date.now();
    const todo = new toDo({
        title,
        comment,
        createdAt,
    })
    todo.save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json({ succes: false }));
})

app.get('/api/todo', (req, res) => {
    toDo.find()
      .then(todos => res.json(todos))
      .catch(err => res.status(400).json({ success: false, error: err }));
  });

app.listen(3000, () => console.log('Server started on port 3000'));