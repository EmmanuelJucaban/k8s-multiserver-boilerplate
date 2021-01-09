import express from 'express';

const port = 3002;


const app = express();

app.get('/', (req, res) => {
  res.send('yeee we out here');
});


app.listen(port, () => console.log('we out of here yee '));

