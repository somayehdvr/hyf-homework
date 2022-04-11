const express = require("express");
const app = express();
// const router = express.Router()

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get('/numbers/add', (req, res) => {
    let sum = parseInt(req.query.first) + parseInt(req.query.second)
    res.send({ sum })
})
app.get('/numbers/multiply/:first/:second', (req, res) => {
    let multiplication = parseInt(req.params.first) + parseInt(req.params.second)
    res.send({ multiplication })
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
