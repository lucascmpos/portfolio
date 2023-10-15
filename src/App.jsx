import React, { useState } from 'react';
import '../styles/App.sass';
import Footer from "/src/components/Footer";
import Header from "/src/components/Header";
import About from "/src/components/About";
import Projects from "/src/components/Projects";
import Exp from "/src/components/Exp";
import Knowl from "/src/components/Knowl";
import HeaderResponsive from './components/HeaderResponsive';

import { Fade } from 'react-reveal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar o modo escuro

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Função para alternar o modo claro/escuro
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    <>
      <main className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Fade >
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <HeaderResponsive toggleMenu={toggleMenu} />
        </Fade>
        <section className="apresentacao">
          <p>Olá, eu me chamo Lucas Campos, sou</p>
          <h1 className="dev">DESENVOLVEDOR FULLSTACK.</h1>
          <p>Apaixonado em criar aplicações e experiências interativas na web.</p>
        </section>
        <section id="quemsou">
          <Fade bottom>
            <About />
          </Fade>
        </section>
        <section id="projetos">
          <Fade duration={500} delay={400}>
            <Projects />
          </Fade>
        </section>
        <section id="experiencia">
          <Fade right>
          <Exp />
          </Fade>
        </section>
        <section id="conhecimentos">
          <Fade left>
            <Knowl />
            </Fade>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
