const fs = require('fs');
const chalk = require('chalk');
//
const FIEL_NAME = 'notes.json';

const getNote = (title) => {
  const notes = loadNotes();
  // const notes = notes.filter((note) => {
  //   return note.title === title;
  // });

  const note = notes.fine((note)=> note.title=== title);
  if(note)
  {
    console.log(chalk.inverse(note.title));
  }
  else{
    console.log(chalk.red.inverse('Note not found'));
  }
}

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Your notes'));

  notes.forEach((note)=>{
    console.log(note.title);
  });
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.fine((note)=> note.title=== title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note was added'));
  }
  else {
    console.log(chalk.red.inverse("Note title was taken"));
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note was removed'));
  }
  else {
    console.log(chalk.red.inverse('No note found'));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(FIEL_NAME);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(FIEL_NAME, dataJSON);
}

module.exports = {
  getNote,
  listNotes,
  addNote,
  removeNote
};