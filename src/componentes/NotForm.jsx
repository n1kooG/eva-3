import React, { useState } from 'react';

const NotForm = ({ addNota }) => {
  const [titulo, setTitulo] = useState('');
  const [desc, setDesc] = useState('');
  const [importante, setImportante] = useState(false);
  const [error, setError] = useState('');

  const ManejarEnvio = (e) => {
    e.preventDefault();
    if (!desc.trim()) {
      setError('La descripción es obligatoria.');
      return;
    }
    addNota({ titulo, desc, importante });
    setTitulo('');
    setDesc('');
    setImportante(false);
    setError('');
  };

  return (
    <form className="nota-form" onSubmit={ManejarEnvio}>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribe un título"
          />
        </div>
        <div className="col">
          <label className="form-label">Descripción *</label>
          <input
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Escribe la descripción"
            required
          />
        </div>
        <div className="col-auto d-flex align-items-end">
          <button type="submit" className="btn btn-primary">
            Agregar Nota
          </button>
        </div>
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
          id="impCheck"
        />
        <label className="form-check-label" htmlFor="impCheck">
          Marcar como importante
        </label>
      </div>
    </form>
  );
};

export default NotForm;
