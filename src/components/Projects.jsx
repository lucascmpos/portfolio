import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/components/SliderImages.sass'
import '../../styles/components/Projects.sass'
import projeto1 from '../../src/img/projeto1.jpeg'
import projeto2 from '../../src/img/projeto2.jpeg'
import projeto3 from '../../src/img/projeto3.jpeg'
import projeto4 from '../../src/img/projeto4.jpeg'
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from 'react-icons/bs'


const Projects = () => {
  const images = [
    {
      src: projeto1,
      caption: "Compass UOL Weekly Planner",
      description:
        "Feito em ReactJS, To-Do-List com cadastro CRUD para validação de usuário pela SwaggerAPI. WeatherAPI para clima da respectiva cidade. (O projeto foi desenvolvido com um banco de dados da Compass UOL durante meu estágio, onde hoje em dia foi excluído. No entanto, estarei disponibilizando uma demonstração em vídeo no meu LinkedIn gravada na época).",
      href1: "https://www.linkedin.com/feed/update/urn:li:activity:7024386144108699648/",
      href2: "https://github.com/lucascmpos/Projeto-Compass-VIII"
    },
    {
      src: projeto2,
      caption: "Upload.AI",
      description: "Feito em React.js e Node.js com tailwind.css, shadcnUI e Prisma, o usuário sobe um vídeo na plataforma e a IA através do Chat-GPT 3.5, transcreve em forma de texto, podendo alterar seus comandos como quiser. (Depois de um certo tempo, a transcrição pode não funcionar mais, devido ao limite financeiro da plataforma OpenAI).",
      href1: "https://uploadai.netlify.app/",
      href2: "https://github.com/lucascmpos/NLW-IA"
    },
    {
      src: projeto4,
      caption: "LCTech Store",
      description: "Feito em Next.js com NextAuth, usando tailwind.css, shadcnUI, PostgresSQL, Prisma, o projeto consiste em uma Loja fictícia de hardware onde o usuário pode entrar com o Google, adicionar produtos ao carrinho, fazer pedidos e realizar pagamentos com Stripe",
      href1: "https://lctechstore.netlify.app/",
      href2: "https://github.com/lucascmpos/LCTech-Store"
    },
    {
      src: projeto3,
      caption: "MonFi",
      description: "Feito em React.js, o usuário pode consultar qualquer filme através de pesquisa, recebendo informações sobre o filme. Integrado com a API da The Movie DB.",
      href1: "https://monfi.netlify.app/",
      href2: "https://github.com/lucascmpos/MonFi"
    },
    
  ];

  return (
    <main className="projects">
      <h2 className="começo">{"Projetos"}</h2>
      <div className="slider-container">
      <p className="texto">Passe o cursor no projeto para mais detalhes!</p>
        <Carousel showThumbs={false}>
          {images.map((image, index) => (
            <div key={index} className="slider">
              <img
                src={image.src}
                alt={image.caption}
              />
              <div className="overlay">
                <h3 className="title">{image.caption}</h3>
                <p className="desc">{image.description}</p>
                <div className="buttons">
                  <a className="button" href={image.href1} target="_blank">
                    <BsBoxArrowUpRight />
                  </a>
                  <a className="button" href={image.href2} target="_blank">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
};

export default Projects;
