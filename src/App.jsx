import React, { useEffect, useState } from 'react';
import NoteForm from './componentes/NoteForm';
import NotesGrid from './componentes/NotesGrid';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Sticky Notes</h1>
      <NoteForm addNote={addNote} />
      <NotesGrid notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;

