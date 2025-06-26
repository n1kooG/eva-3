import React from 'react';

const Note = ({ note, index, onDelete }) => {
  return (
    <div className={`note ${note.important ? 'important' : ''}`}>
      <button className="close-btn" onClick={() => onDelete(index)}>X</button>
      <h3>{note.title}</h3>
      <p>{note.desc}</p>
    </div>
  );
};

export default Note;
