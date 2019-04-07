const chalk = require('./node_modules/chalk')
const getNotes = require('./notes.js.js.js.js.js.js.js.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg)