import React, { useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import '../../styles/components/Header.sass';

function Header({ toggleDarkMode, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const darkModeClass = isDarkMode ? 'dark-mode active' : 'dark-mode';

  return (
    <header className='header'>
      <h1>{'<'}</h1>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <nav className={`nav-bar ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#quemsou" onClick={closeMenu}>Quem sou</a>
          </li>
          <li>
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
          </li>
          <li>
            <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          </li>
          <li>
            <a href="#conhecimentos" onClick={closeMenu}>Conhecimentos</a>
          </li>
        </ul>
      </nav>

      <h1>{'/>'}</h1>

      <div className="dark-mode-slider">
        <label className="slider-label">
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="slider" style={{ border: "2px solid grey" }}>
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
