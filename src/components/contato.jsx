// Contato.js
import React from 'react';
import styles from '../styles/contato.module.css'; // Importando o módulo CSS
import Faixada1 from '../img/faixada-1.png'

const Contato = () => {
  return (
    <div className={styles.contatoContainer}>
      <div className={styles.contatoImage}>
        <img src={Faixada1} alt="Imagem de contato" />
      </div>
      <div className={styles.contatoInfo}>
        <h2>Entre em Contato Conosco</h2>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - Bairro das Flores, Cidade, Estado, CEP 12345-678</p>
        <p><strong>Telefone:</strong> (11) 1234-5678</p>
        <p><strong>Email:</strong> contato@lojasapatos.com.br</p>
      </div>
    </div>
  );
};

export default Contato;
