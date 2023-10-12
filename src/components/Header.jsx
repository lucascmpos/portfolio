import React from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import '../../styles/components/Header.sass';

function Header({ toggleDarkMode, isDarkMode }) {
  const darkModeClass = isDarkMode ? 'dark-mode active' : 'dark-mode';
  return (
    <header>
      <h1>{'<'}</h1>
      <nav>
        <ul>
          <li>
            <a href="#quemsou">Quem sou</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#experiencia">Experiência</a>
          </li>
          <li>
            <a href="#conhecimentos">Conhecimentos</a>
          </li>
        </ul>
      </nav>

      <h1>{'/>'}</h1>

      <div className="dark-mode-slider">
        <label className="slider-label">
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="slider" style={{border: "2px solid grey"}}>
            <div className="slider-indicator" />
            <RiSunFill className="sun-icon" />
            <RiMoonFill className="moon-icon" />
          </span>
        </label>
      </div>
    </header>
  );
}

export default Header;
