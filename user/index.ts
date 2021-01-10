import express from 'express';
import { connect } from 'mongoose';


const app = express();

app.get('/', async (req, res) => {
  res.json('Manny you made it!');
});


app.listen(3001, () => console.log(`we out of here yee`));

