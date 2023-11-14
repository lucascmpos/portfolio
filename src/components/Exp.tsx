import React, { useState } from "react";
import "../../styles/components/Exp.sass";

const Exp = () => {
  const experiencias = [
    {
      id: 1,
      titulo: "Desenvolvedor Front-End & AWS Cloud",
      subtitulo: "Compass UOL",
      descricao:
        "Durante 5 meses, foram feitos diversos cursos de desenvolvimento, metodologias ágeis e AWS Cloud, contendo projetos reais e avaliações durante um programa de bolsas, após isso, fui efetivado e atuei na Compass dentro do seu parceiro Livelo, onde pratiquei metodologias ágeis como Scrum e Kanban, desenvolvi, modifiquei, testei componentes do Storybook do Livelo App (Web/Mobile) utilizando React TS, React Native, Styled Components, SASS, Storybook e Figma.",
      data: "28/11/2022 - 02/09/2023 - 11 Meses",
    },
    {
      id: 2,
      titulo: "Auxiliar de Help Desk",
      subtitulo: "Webby Internet",
      descricao:
        "Como estagiário em um provedor de internet atuei atendendo o público, prestando suporte interno e externo através de um sistema ERP, configurando redes de internet (IPV4/IPV6, DNS, MTU) de roteadores e modens com uma solução técnica e rápida de problemas de infraestrutura de hardware, rede e segurança.",
      data: "05/06/2021 - 05/12/2021 - 6 Meses",
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
      <h2 className="começo">{"Experiências"}</h2>
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
    </section>
  );
};

export default Exp;
