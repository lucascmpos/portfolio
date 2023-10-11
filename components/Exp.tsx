import React, { useState } from 'react';

import '../styles/components/Exp.sass'

const Exp = () => {
  const experiencias = [
    {
      id: 1,
      titulo: 'Desenvolvedor Front-End',
      subtitulo: 'Compass UOL',
      descricao: 'Descrição da Experiência 1.',
      data: '10/10/2023',
    },
    {
      id: 2,
      titulo: 'Estagiário de Desenvolvimento Front-End e AWS Cloud',
      subtitulo: 'Compass UOL',
      descricao: 'Descrição da Experiência 2.',
      data: '11/10/2023',
    },
    {
      id: 3,
      titulo: 'Estagiário em Help Desk',
      subtitulo: 'Webby Internet',
      descricao: 'Descrição da Experiência 3.',
      data: '12/10/2023',
    },
  ];

  // Inicialize o estado com a primeira experiência
  const [experienciaSelecionada, setExperienciaSelecionada] = useState(experiencias[0]);

  const handleExperienciaClicada = (experiencia) => {
    setExperienciaSelecionada(experiencia);
  };

  return (
      
      <section className='exp'>
        <h2 className='começo'>{'<Experiências'}</h2>
    <div className="experiencias-container">
      <div className="experiencias-menu">
        <ul className='items-menu'>
          {experiencias.map((experiencia) => (
            <li key={experiencia.id} onClick={() => handleExperienciaClicada(experiencia)}>
              <h3>{experiencia.subtitulo}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="experiencias-conteudo">
        {experienciaSelecionada && (
          <div>
            <h2>{experienciaSelecionada.titulo}</h2>
            <p>{experienciaSelecionada.subtitulo}</p>
            <p>{experienciaSelecionada.descricao}</p>
            <p>Data: {experienciaSelecionada.data}</p>
          </div>
        )}
      </div>
      <h2 className='fim'>{'/>'}</h2>
    </div>
    </section>
  );
};


export default Exp;
