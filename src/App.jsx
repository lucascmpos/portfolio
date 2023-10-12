import React, { useState } from 'react';
import '../styles/App.sass';
import Footer from "/src/components/Footer";
import Header from "/src/components/Header";
import About from "/src/components/About";
import Projects from "/src/components/Projects";
import Exp from "/src/components/Exp";
import Knowl from "/src/components/Knowl";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar o modo escuro

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Função para alternar o modo claro/escuro
  };

  return (
    <>
      <main className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <section className="apresentacao">
          <p>Olá, eu me chamo Lucas Campos, sou</p>
          <h1 className="dev">DESENVOLVEDOR FULLSTACK.</h1>
          <p>Apaixonado em criar aplicações e experiências interativas na web.</p>
        </section>
        <section id="quemsou">
          <About />
        </section>
        <section id="projetos">
          <Projects />
        </section>
        <section id="experiencia">
          <Exp />
        </section>
        <section id="conhecimentos">
          <Knowl />
        </section>
      <Footer />
      </main>
    </>
  );
}

export default App;
