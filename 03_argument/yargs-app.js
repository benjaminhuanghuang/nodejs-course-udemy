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

yargs.command(
  {
    command: 'addNote',   // handle: node app.js addTitle --title="abc"
    describe: 'Add new note',
    handler: function (argv) {
      console.log('Add new note ', argv);
    },
    builder:{
      title:{
        describe: 'Note title',
        demandOption : true,
        type: 'string'
      },

      body:{
        describe: 'Note body',
        demandOption : true,
        type: 'string'
      }
    }
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

yargs.parse();