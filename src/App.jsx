import Footer from "../components/Footer"
import Header from "../components/Header"
import About from "../components/About"

import '../styles/App.sass'
import Projects from "../components/Projects"
import Exp from "../components/Exp"
import Knowl from "../components/Knowl"
function App() {

  return (
    <>
      <Header />
      <main className="main">
        <section className="apresentacao">
          <p>Olá, eu me chamo Lucas Campos, sou </p>
          <h1 className="dev">DESENVOLVEDOR FULLSTACK.</h1>
          <p>Apaixonado em criar aplicações e experiências interativas na web. </p>
        </section>
        <section id='quemsou'>
          <About />
        </section>
        <section id='projetos'>
          <Projects />
        </section>
        <section id='experiencia'>
          <Exp />
        </section>
        <section id='conhecimentos'>
          <Knowl />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
