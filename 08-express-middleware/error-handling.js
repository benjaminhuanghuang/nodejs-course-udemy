const express = require('express');

const app = express();
//
const port = 3333

// Using middleware to create error
const errorMiddleware = (req, res, next) => {
  throw new Error('Error from middleware');
}


app.get('/', errorMiddleware,
  (req, res) => {
    res.send('Hello World!')
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))