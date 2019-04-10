const express = require('express');
const multer = require('multer')

const app = express();
//
const port = 3333

const upload = multer({
  dest: 'avatars',
  limits: {
      fileSize: 1000000
  },
  fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(new Error('Please upload an image'))
      }

      cb(undefined, true)
  }
})

app.post('/upload', upload.single('upload'), (req, res)=>{
  res.send();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))