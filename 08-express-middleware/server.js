const express = require('express');

const app = express();
//
const port = 3333

// application level middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  if (req.method === 'GET') {
    res.send('GET requests are disabled.');
  }
  else {
    next();  // without this line, server will keep loading
  }
})


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))