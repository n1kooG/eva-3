import React, { useEffect, useState } from 'react';
import NotForm from './componentes/NotForm';
import CuadriculaNotas from './componentes/CuadriculaNotas';
import './styles.css';

const obtenerNotasGuardadas = () => {
  try {
    const notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    return Array.isArray(notasGuardadas) ? notasGuardadas : [];
  } catch {
    return [];
  }
};

const App = () => {
  const [notas, setNotas] = useState(obtenerNotasGuardadas);

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(notasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const addNota = (nota) => {
    setNotas([...notas, nota]);
  };

  const delNota = (index) => {
    const nuevaNota = [...notas];
    nuevaNota.splice(index, 1);
    setNotas(nuevaNota);
  };

  return (
    <div className="container">
      <h1>Notas Adhesivas</h1>
      <NotForm addNota={addNota} />
      <CuadriculaNotas notas={notas} deleteNote={delNota} />
    </div>
  );
};

export default App;

