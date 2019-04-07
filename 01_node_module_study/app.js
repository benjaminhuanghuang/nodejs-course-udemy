require('./utils.js')     // will load and execute ./utils.js


/********************************
 Import a variale
 ********************************/
const name = require('./utils2.js')  // require() returns the value of module.exports in ./utils2.js
console.log(name);

/********************************
 Import a funcation
 ********************************/
const add = require('./utils3.js')  // require() returns the value of module.exports in ./utils2.js
const sum = add(1, 4);
console.log(sum);
