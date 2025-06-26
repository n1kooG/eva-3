import React, { useEffect, useState } from 'react';
import NotForm from './componentes/NotForm';
import CuadriculaNotas from './componentes/CuadriculaNotas';
import './styles.css';

const App = () => {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const NotasGuardadas = JSON.parse(localStorage.getItem('notas')) || [];
    setNotas(NotasGuardadas);
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

