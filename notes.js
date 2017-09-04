var getAll = ()=>{
  
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