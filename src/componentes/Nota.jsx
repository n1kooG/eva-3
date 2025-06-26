import React from 'react';

const Nota = ({ nota, indice, alEliminar }) => {
  return (
    <div className={`nota ${nota.importante ? 'importante' : ''}`}>
      <button className="close-btn" onClick={() => alEliminar(indice)}>×</button>
      <h3>{nota.titulo}</h3>
      <p>{nota.desc}</p>
    </div>
  );
};

export default Nota;
