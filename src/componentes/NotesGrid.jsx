import React from 'react';
import Note from './Note';

const NotesGrid = ({ notes, deleteNote }) => {
  return (
    <div className="notes-grid">
      {notes.map((note, idx) => (
        <Note key={idx} note={note} index={idx} onDelete={deleteNote} />
      ))}
    </div>
  );
};

export default NotesGrid;
