const fs = require('fs');


// object
const book ={
  title: "Xi you ji",
  author: "Wu chenen"
}

// Object -> string
const bookJSON = JSON.stringify(book);

fs.writeFileSync('1.json', bookJSON);

const dataBuffer = fs.readFileSync('1.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
// String -> Object
const data = JSON.parse(dataJSON);
