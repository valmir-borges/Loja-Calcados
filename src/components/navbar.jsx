import React from 'react';
import Style from '../styles/NavBar.module.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {  
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/cadastro');
  };
  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>
      <header className={Style.header}>
        <div className={Style.container}>
          <span className={Style.texto} onClick={handleNavigation}>CADASTRO</span>
          <span className={Style.texto} onClick={handleHome}>MENU</span>
          <span className={Style.texto} onClick={handleHome}>MARCAS</span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
