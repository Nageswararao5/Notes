let notes = require('../data/notesData');

// Get all notes
exports.getAllNotes = (req, res) => {
  res.json(notes);
};

exports.getNoteById = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
};
exports.createNote = (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: notes.length ? notes[notes.length - 1].id + 1 : 1,
    title,
    content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
};

// Update note by ID
exports.updateNote = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  note.title = req.body.title || note.title;
  note.content = req.body.content || note.content;
  res.json(note);
};

// Delete note by ID
exports.deleteNote = (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (noteIndex === -1) return res.status(404).json({ message: "Note not found" });
  notes.splice(noteIndex, 1);
  res.status(204).send();
};