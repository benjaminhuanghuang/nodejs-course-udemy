console.log("Starting app.js");
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes");

const argv = yargs.argv;
var command = argv._[0];
console.log("Command", command);
console.log("Yargs", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
}

var getNote = (title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=>{
    note.title === title;
  });
  return filteredNotes[0];
}

var removeNote= (title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=>{
    note.title !== title;
  });
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var logNote = (note)=>{
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}