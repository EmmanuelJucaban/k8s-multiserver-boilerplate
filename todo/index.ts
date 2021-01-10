import express from 'express';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { connect } from 'mongoose';


class Todo {
  @prop()
  todo: string;
}

const TodoModel = getModelForClass(Todo);

connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('pro', process.env.MONGODB_URI);
    if (process.env.LALA === 'LEET') {
      console.log('YEEE');
    }
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


app.listen(process.env.PORT, () => console.log(`we out of here yee ${ process.env.PORT }`, process.env.PORT));

