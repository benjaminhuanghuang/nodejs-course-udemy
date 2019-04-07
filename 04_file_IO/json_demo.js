// object
const book ={
  title: "Xi you ji",
  author: "Wu chenen"
}

// string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Parse string to json obj
const bookObj = JSON.parse(bookJSON);
console.log(bookObj.author);