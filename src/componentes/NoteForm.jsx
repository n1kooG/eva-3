import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [important, setImportant] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc.trim()) {
      setError('La descripción es obligatoria.');
      return;
    }
    addNote({ title, desc, important });
    setTitle('');
    setDesc('');
    setImportant(false);
    setError('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3 className="mb-3">Crear Nota</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label className="form-label">Título (opcional)</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe un título"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción *</label>
        <textarea
          className="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Escribe la descripción"
          required
        />
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
          id="importantCheck"
        />
        <label className="form-check-label" htmlFor="importantCheck">
          Marcar como importante
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Agregar Nota
      </button>
    </form>
  );
};

export default NoteForm;
