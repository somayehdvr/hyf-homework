const express = require('express');
const app = express();
const router = express.Router();
const port = 3001;
const todosRouter = require("./todos");
var cors = require('cors')({
  origin: 'http://localhost:3000',
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});



router.use("/todos", cors, todosRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
