const fs = require('fs');
const chalk = require('chalk');
//
const FIEL_NAME = 'notes.json';

const getNotes = function () {

}


const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  }
  else {
    console.log("No new note added");
  }
}
const removeNote = function (title)
{
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if(notes.length > notesToKeep.length)
  {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note was removed'));
  }
}
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync(FIEL_NAME);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return [];
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(FIEL_NAME, dataJSON);
}

module.exports = {
  getNotes,
  addNote,
  removeNote
};