import express from 'express';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { connect } from 'mongoose';
import axios from 'axios';

class Todo {
  @prop()
  todo: string;
}

const TodoModel = getModelForClass(Todo);


connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('pro', process.env.MONGODB_URI);
  })
  .catch(e => console.log(e));

const app = express();

app.get('/', async (req, res) => {

  // console.log('hit!')
  // const newTodo = await TodoModel.create({
  //   todo: 'Hello World'
  // });
  //
  // const todos = await TodoModel.find({});

  try {
    // console.log('we are the todos', todos);
    const resp = await axios.get('http://user-server-cluster-ip-service:3001');
    // console.log(resp.data);
    res.json(resp.data);
  } catch (e) {
    res.json(e);
  }


});


app.listen(process.env.PORT, () => console.log(`we out of here yee ${ process.env.PORT }`, process.env.PORT));

