
import React from 'react';


import '../styles/components/Header.sass'

function Header() {
  return (
    <header>
      <h1>{'<'}</h1>
      <nav>
        <ul>
          <li><a href="/">Quem sou</a></li>
          <li><a href="/projetos">Projetos</a></li>
          <li><a href="/experiencia">Experiência</a></li>
          <li><a href="/conhecimentos">Conhecimentos</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
      <h1>{'/>'}</h1>
    </header>
  );
}

export default Header;
