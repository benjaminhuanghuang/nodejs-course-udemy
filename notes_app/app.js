
const chalk = require('chalk')
const yargs = require('yargs');

//
const {getNotes, addNote} = require('./notes');


// Create add command
yargs.command(
  {
    command: 'add',   // handle: node app.js add --title="abc"
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