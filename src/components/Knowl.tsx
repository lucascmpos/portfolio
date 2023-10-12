import React, { useState } from 'react';
import '../../styles/components/Knowl.sass'

import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs, FaJava, FaDocker } from 'react-icons/fa'
import { SiCss3, SiTypescript, SiJavascript, SiSass, SiReact, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiRadixui, SiStorybook, SiAngular, SiAmazonaws } from 'react-icons/si';

const Knowl = () => {
  const [cardTexto, setCardTexto] = useState('');
  const [isMouseOverCard, setIsMouseOverCard] = useState(false);

  const handleCardMouseEnter = (texto) => {
    setCardTexto(texto);
    setIsMouseOverCard(true);
  };

  const handleCardMouseLeave = () => {
    setIsMouseOverCard(false);
  };

  return (
    <main className='knowl'>
      <section className='conhecimentos-container'>
        <h2 className='começo-con'>{'<Conhecimentos'}</h2>
        <div className='descricao-conhecimentos'>
          <p className='desc'>
            {isMouseOverCard
              ? cardTexto
              : '*passe o cursor nos cards para saber mais, a descrição do conhecimento aparecerá aqui*'}
          </p>
        </div>
        <div className='cards'>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('HTML é uma linguagem de marcação usada para criar a estrutura de páginas da web, definindo elementos e conteúdo.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <AiFillHtml5 />
            
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('CSS é uma linguagem de estilo que controla a aparência e o layout das páginas da web, aplicando estilos e formatação.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiCss3 />
            
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('JavaScript é uma linguagem de programação usada para tornar as páginas da web interativas, permitindo interações dinâmicas.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiJavascript />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('TypeScript é uma extensão do JavaScript que adiciona tipagem estática para maior segurança e previsibilidade.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiTypescript />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Sass é uma linguagem de folhas de estilo que estende o CSS, oferecendo recursos adicionais de organização e reutilização de estilos.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiSass />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Styled Components é uma biblioteca de estilização em JavaScript que permite criar componentes estilizados com facilidade.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiStyledcomponents />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Tailwind CSS é um framework de CSS que simplifica a estilização de aplicativos com classes utilitárias.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiTailwindcss />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('React é uma biblioteca JavaScript para construir interfaces de usuário reativas e componentizadas.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiReact />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Next.js é um framework de React para criação de aplicativos da web do lado do servidor com roteamento e renderização no servidor.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiNextdotjs />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Radix UI é uma biblioteca para criar componentes de interface de usuário acessíveis, como menus e modais.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiRadixui />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Storybook é uma ferramenta de desenvolvimento que facilita a criação e visualização de componentes de interface de usuário isoladamente.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiStorybook />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Node.js é um framework de JavaScript para back-end, sendo um ambiente de tempo de execução JavaScript que permite executar JavaScript no servidor.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <FaNodeJs />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Angular é um framework de JavaScript para desenvolvimento de aplicativos da web com recursos robustos.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiAngular />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Java é uma linguagem de programação amplamente usada para back-end para desenvolvimento de software, conhecida por sua portabilidade.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <FaJava />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Amazon AWS é uma plataforma de serviços em nuvem oferecida pela Amazon, incluindo armazenamento, computação e muito mais.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <SiAmazonaws />
          </div>
          <div
            className='card'
            onMouseEnter={() => handleCardMouseEnter('Docker é uma plataforma de contêiner que permite empacotar e distribuir aplicativos em contêineres para fácil implantação.')}
            onMouseLeave={handleCardMouseLeave}
          >
            <FaDocker />
          </div>
        </div>
      <h2 className='fim-con'>{'/>'}</h2>
      </section>
    </main>
  );
};

export default Knowl;
