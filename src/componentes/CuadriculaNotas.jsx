import React from 'react';
import Nota from './Nota';

const CuadriculaNotas = ({ notas, deleteNote }) => {
  return (
    <div className="cuadricula-notas">
      {notas.map((nota, index) => (
        <Nota key={index} nota={nota} indice={index} alEliminar={deleteNote} />
      ))}
    </div>
  );
};

export default CuadriculaNotas;
