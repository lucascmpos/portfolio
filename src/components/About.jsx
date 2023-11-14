import React from "react";

import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

import curriculo from "../img/curriculo lco.pdf";
import "../../styles/components/About.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/lucas-campos-b26a3b204/",
  },
  { name: "github", icon: <FaGithub />, href: "https://github.com/lucascmpos" },
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/5514998718530",
  },
];

const About = () => {
  return (
    <main className="main-about">
      <div className="about">
        <section className="textos">
          <h2 className="começo">{"Quem sou"}</h2>
          <p>
            Olá, sou Lucas Campos, e meu fascínio pelo mundo da programação
            começou em 2018, quando dei os primeiros passos no universo do C++.
            Desde então, venho me dedicando ao desenvolvimento, focando tanto no
            Front-End quanto no Back-End.
          </p>
          <p>
            Meu primeiro contato com a programação foi em 2018, com o C++, porém
            atualmente estou imerso no ecossistema JavaScript e TypeScript,
            utilizando tecnologias como React.js/Next.js para criar experiências
            envolventes no Front-End e explorando as possibilidades do Node.js
            para fortalecer o Back-End. <br></br>Em busca contínua de
            aprimoramento, estou direcionando meus estudos para o Angular e
            Java, expandindo assim meu conjunto de habilidades.
          </p>
          <p>
            Além dos meus estudos e práticas sobre desenvolvimento, estou
            avançando em minha formação acadêmica como graduando em Segurança da
            Informação.<br></br> Essa combinação de conhecimento prático e
            teórico me permite abordar os desafios de desenvolvimento de maneira
            abrangente.
          </p>
          <p>
            Minha bagagem com essa graduação inclui experiência prática em
            tecnologias como AWS Cloud, bancos de dados SQL e Docker,
            proporcionando uma base sólida para enfrentar os desafios
            contemporâneos. <br></br>Sempre busco ir além das expectativas,
            garantindo que as soluções que entrego sejam não apenas funcionais,
            mas também eficientes e seguras.
          </p>
          <p>
            O que mais me motiva é a busca por oferecer aos usuários aplicações
            que se destacam pela sua limpeza, responsividade e qualidade
            excepcional.<br></br> Estou animado com as possibilidades que a
            programação oferece e ansioso para continuar explorando novos
            horizontes neste universo.
          </p>
        </section>
        <section id="social-networks">
          {socialNetworks.map((network) => (
            <a
              href={network.href}
              target="_blank"
              className="social-btn"
              id={network.name}
              key={network.name}
            >
              {network.icon}
            </a>
          ))}
        </section>
        <div className="div-download-button">
          <button
            className="download-button"
            onClick={() => window.open(curriculo, "_blank")}
          >
            <HiDocumentText />
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
