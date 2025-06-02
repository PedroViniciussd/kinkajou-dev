'use client';

import React, { useRef, useEffect, useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Logo1 from '/public/assets/image/logo-billconnect.png';
import Logo2 from '/public/assets/image/universomaterno-logo.png';

const parceiros = [
  { nome: "Parceiro 1", imagem: Logo1, url: "https://billconnect.com.br/" },
  { nome: "Parceiro 2", imagem: Logo2, url: "https://universomaternooficial.com.br/" },
  { nome: "Parceiro 3", imagem: Logo2, url: "https://universomaternooficial.com.br/" },
  { nome: "Parceiro 4", imagem: Logo2, url: "https://universomaternooficial.com.br/" },
  { nome: "Parceiro 5", imagem: Logo2, url: "https://universomaternooficial.com.br/" },
  { nome: "Parceiro 6", imagem: Logo1, url: "https://billconnect.com.br/" },
];

export default function Parceiros() {
  const carouselRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    // Pega a largura do primeiro item + gap para controlar o scroll
    const firstItem = carouselRef.current?.querySelector('.parceiro-card');
    if (firstItem) {
      setItemWidth(firstItem.offsetWidth + 10); // 10px de gap
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="parceiros-section text-background">
      <h2>Nossos Clientes</h2>
      <p className="projetos-desc">Empresas que confiam no nosso trabalho e com quem temos orgulho de construir parcerias digitais.</p>

      <div className="carousel-wrapper">
        <button 
          className="carousel-button left"  
          aria-label="Previous slide" 
          onClick={() => scroll('left')}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="carousel-container" ref={carouselRef}>
          {parceiros.map((parceiro, index) => (
            <div key={index} className="carousel-card parceiro-card">
              <a 
                href={parceiro.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={parceiro.imagem.src}  // ajuste importante para Next.js
                  alt={`Logo de ${parceiro.nome}`}
                  className="carousel-image parceiro-logo"
                />
              </a>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button right" 
          aria-label="Next slide" 
          onClick={() => scroll('right')}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}
