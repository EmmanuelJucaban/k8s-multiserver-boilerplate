import express from 'express';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { connect } from 'mongoose';

const port = 3002;

class Todo {
  @prop()
  todo: string;
}

const TodoModel = getModelForClass(Todo);

connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected');
  })
  .catch(e => console.log(e));

const app = express();

app.get('/', async (req, res) => {

  const newTodo = await TodoModel.create({
    todo: 'Hello World'
  });

  const todos = await TodoModel.find({});

  console.log('we are the todos', todos);

  res.json(newTodo);
});


app.listen(port, () => console.log('we out of here yee '));

