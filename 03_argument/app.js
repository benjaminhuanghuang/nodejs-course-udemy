// Print all args
// console.log(process.argv);


// Print arg
//console.log('The argv[2] is: '+ process.argv[2]);


// Parse arg like node app.js --title=Hello
// Yargs has some default settings node app.js --help   
const yargs = require('yargs');
console.log(yargs.argv);

yargs.version("1.1.1")

// Create add command
yargs.command(
  'add',   // handle: node app.js add
  'Add new command',
  function () {
    console.log('Handle command "add".');
  }
);

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
      console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
      console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
      console.log('Reading a note')
  }
})

console.log(yargs.argv)