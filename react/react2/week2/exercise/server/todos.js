const express = require("express");
const router = express.Router();


const todos = [
    {
      id: 1,
      text: 'wake up',
      done: false,
    },
];
  
router.get('/todos', (req, res) => {
    res.send(todos);
});
  
module.exports= router;