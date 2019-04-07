const chalk = require('chalk')
const getNotes = require('./notes.js.js.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg)