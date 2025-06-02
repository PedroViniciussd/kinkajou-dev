'use client';

import React, { useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";
import styles from "./style.css";

const projetos = [
  {
    nome: "BillConnect",
    imagem: "/assets/image/projeto-billconnect.png",
    imagemModal: "/assets/image/billconnect-project.png",
    link: "https://www.billconnect.com.br"
  },
  {
    nome: "Universo Materno Oficial",
    imagem: "/assets/image/projeto-universomaterno.png",
    imagemModal: "/assets/image/projeto-universomaternoficial.png",
    link: "https://universomaternooficial.com.br/"
  }
];

export default function Projetos() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalLink, setModalLink] = useState(null);
  const [zoom, setZoom] = useState(false);

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.scrollWidth / projetos.length;
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / projetos.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (imagemModal, link) => {
    setModalImage(imagemModal);
    setModalLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalLink(null);
    setZoom(false);
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <section id="projetos" className="text-background projetos-section">
      <h2>Projetos feitos pela Kinkajou</h2>
      <p className="projetos-desc">
       De sites criativos a soluções sob medida, aqui estão alguns dos nossos orgulhos digitais!
      </p>

      <div className="carousel-wrapper">
        <div className="carousel-container" ref={carouselRef}>
          {projetos.map((projeto, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal(projeto.imagemModal, projeto.link);
              }}
              className="carousel-card"
            >
              <img
                src={projeto.imagem}
                alt={`Capa do ${projeto.nome}`}
                className="carousel-image"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {projetos.map((_, index) => (
          <button
            aria-label="Slides"
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="icon-btn" onClick={toggleZoom} aria-label="Zoom imagem">
                <Search size={20} />
              </button>
              <button className="close-btn" onClick={closeModal} aria-label="Fechar modal">×</button>
            </div>

            <div className={`modal-image-container ${zoom ? "zoom" : ""}`}>
              <img
                src={modalImage}
                alt="Imagem do projeto"
                className="modal-image"
                loading="lazy"
              />
            </div>

            <div className="modal-footer">
              <a
                href={modalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-btn"
              >
                Visitar site
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
