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
            Meu nome é Lucas Campos, atualmente estou focado em atuar como
            Desenvolvedor tanto para Front-End, quanto para Back-End.
          </p>
          <p>
            Meu primeiro contato com a programação foi em 2018, com o C++.
            Atualmente estudo e desenvolvo aplicações em JavaScript e
            TypeScript, utilizando React.js/Next.js para o Front-End, e Node.js
            para Back-End.
            <br />
            Para o futuro, já estou encaminhando meus estudos para Angular e
            Java.
          </p>
          <p>
            Graduando em Segurança da Informação, possuo também experiências em
            AWS Cloud, SQL, Docker e etc.{" "}
          </p>
          <p>
            Procuro sempre entregar ao usuário uma aplicação limpa, responsiva,
            moderna e de alta qualidade.
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
