'use client'; // indica que é componente client-side por usar useState/useEffect

import { useState, useEffect } from 'react';
import './style.css';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (e) => {
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
    setMenuOpen(false); // fecha menu ao clicar
  };

useEffect(() => {
  if (typeof window === 'undefined') return;

  const currentSection = window.location.hash;

  if (!currentSection || currentSection === '#home') {
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  } else {
    const activeLink = document.querySelector(`.nav-link[href="${currentSection}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}, []);


  return (
    <header className="header-container">
      <div className="nav-container">
        <div className="logo">
          <img
            src="/assets/image/kinkajou-dev-logo.png"
            alt="Kinkajou Dev Logo"
            className="logo-img"
          />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleMenuClick}>
            Home
          </a>
          <a href="#sobre" className="nav-link" onClick={handleMenuClick}>
            Sobre
          </a>
          <a href="#projetos" className="nav-link" onClick={handleMenuClick}>
            Projetos
          </a>
          <a href="#contato" className="nav-link" onClick={handleMenuClick}>
            Contato
          </a>
        </nav>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className="topo borda-gradient"></div>

      <div className={`sidebar ${menuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          ×
        </button>
        <a href="#home" onClick={handleMenuClick}>
          Home
        </a>
        <a href="#sobre" onClick={handleMenuClick}>
          Sobre
        </a>
        <a href="#projetos" onClick={handleMenuClick}>
          Projetos
        </a>
        <a href="#contato" onClick={handleMenuClick}>
          Contato
        </a>
      </div>
    </header>
  );
}
