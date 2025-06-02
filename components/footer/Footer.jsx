'use client';

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './style.css';

export default function Footer() {
  const [anoAtual, setAnoAtual] = useState('');

  useEffect(() => {
    setAnoAtual(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Coluna Esquerda */}
        <div className="footer-left">
          <img src="/assets/image/kinkajou-dev-logo.png" alt="Kinkajou Dev Logo" className="footer-logo" />
          <div className="footer-contact">
            <a href="mailto:pedrovinicius.sd@gmail.com" className="footer-link">
              <FaEnvelope className="footer-icon" /> pedrovinicius.sd@gmail.com
            </a>
            <a href="https://wa.me/5511934902934" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaPhoneAlt className="footer-icon" /> (11) 9 3490-2934
            </a>
          </div>
        </div>

        {/* Coluna Centro - Mapa do Site */}
        <div className="footer-center">
          <h4>Mapa do site</h4>
          <ul className="footer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna Direita - Newsletter */}
        <div className="footer-right">
          <h4>Assine a newsletter</h4>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" id="email" placeholder="Seu e-mail" required />
            <button id="enviar" type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="topo borda-gradient"></div>
      <div className="footer-bottom">
      <p>© {anoAtual} Kinkajou Dev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
