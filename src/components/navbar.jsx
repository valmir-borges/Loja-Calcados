import React from 'react';
import Style from '../styles/NavBar.module.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {  // Alterado para começar com letra maiúscula
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/cadastro');
  };

  return (
    <div>
      <header className={Style.header}>
        <div className={Style.container}>
          <span className={Style.texto} onClick={handleNavigation}>CADASTRO</span>
          <span className={Style.texto}>MENU</span>
          <span className={Style.texto}>MARCAS</span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
