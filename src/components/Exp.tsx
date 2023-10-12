import React, { useState } from "react";
import "../../styles/components/Exp.sass";

const Exp = () => {
  const experiencias = [
    {
      id: 1,
      titulo: "Desenvolvedor Trainee",
      subtitulo: "Compass UOL",
      descricao:
        "Atuei na Compass dentro do seu parceiro Livelo, onde pratiquei metodologias ágeis como Scrum e Kanban, desenvolvi, modifiquei, testei componentes do Storybook do Livelo App (Web/Mobile) utilizando React TS, React Native, Styled Components, SASS, Storybook e Figma.",
      data: "05/06/2023 - 02/09/2023",
    },
    {
      id: 2,
      titulo: "Estagiário de Desenvolvimento Front-End e AWS Cloud",
      subtitulo: "Compass UOL",
      descricao:
        "No programa de bolsas, foram feitos diversos cursos na Udemy dos respectivos conteúdos: Metodologias ágeis, lógica de programação, Git, JavaScript, TypeScript, ReactJS, Testes integrados, NodeJS, e finalizando com AWS Cloud. Todo esse conhecimento adquirido, foi aplicado em dois projetos dentro do estágio, utilizando: React e React Native (JavaScript, TypeScript, HTML, CSS), APIs - Weather API, Swagger API e AWS Cloud e GraphQL. ",
      data: "11/11/2022 - 01/05/2023",
    },
    {
      id: 3,
      titulo: "Estagiário em Help Desk",
      subtitulo: "Webby Internet",
      descricao:
        "Como estagiário em um provedor de internet atuei atendendo o público, prestando suporte interno e externo através de um sistema ERP, configurando redes de internet (IPV4/IPV6, DNS, MTU) de roteadores e modens com uma solução técnica e rápida de problemas de infraestrutura de hardware, rede e segurança.",
      data: "05/06/2021 - 05/12/2021",
    },
  ];

  const [experienciaSelecionada, setExperienciaSelecionada] = useState(
    experiencias[0]
  );
  const [itemAtivo, setItemAtivo] = useState(null);

  const handleExperienciaClicada = (experiencia, index, e) => {
    e.preventDefault();
    setExperienciaSelecionada(experiencia);
    setItemAtivo(index);
  };

  return (
    <section className="exp">
      <h2 className="começo">{"<Experiências"}</h2>
      <div className="experiencias-container">
        <div className="experiencias-menu">
          <ul className="items-menu">
            {experiencias.map((experiencia, index) => (
              <li
                key={experiencia.id}
                onClick={(e) => handleExperienciaClicada(experiencia, index, e)}
                className={index === itemAtivo ? "ativo" : ""}
              >
                <h3 className="menu-titulo">{experiencia.subtitulo}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="experiencias-conteudo">
          {experienciaSelecionada && (
            <div>
              <h2 className="tit">{experienciaSelecionada.titulo}</h2>
              <p className="subtit">{experienciaSelecionada.subtitulo}</p>
              <p className="descricao">{experienciaSelecionada.descricao}</p>
              <p className="data">{experienciaSelecionada.data}</p>
            </div>
          )}
        </div>
      </div>
      <h2 className="fimexp">{"/>"}</h2>
    </section>
  );
};

export default Exp;
