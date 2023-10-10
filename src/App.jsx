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
          <p>Conheça mais sobre mim:</p>
        </section>
        <About />
        <Projects />
        <Exp />
        <Knowl />
      </main>
      <Footer />
    </>
  )
}

export default App
