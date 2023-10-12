import React from 'react';
import { RiMenuFill } from 'react-icons/ri';

function HeaderResponsive({ toggleMenu }) {
  return (
    <div className="header-responsive">
      <RiMenuFill className="menu-icon" onClick={toggleMenu} />
    </div>
  );
}

export default HeaderResponsive;