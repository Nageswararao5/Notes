const express = require('express');
const app = express();
const notesRoutes = require('./routes/notes');

app.use(express.json());
app.use('/notes', notesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});exports.getNoteById = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
}