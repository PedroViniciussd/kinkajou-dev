'use client';

import { useState, useEffect } from 'react';
import './style.css';

const frases = [
  "Sua presença digital começa com um site de alto nível.",
  "Soluções em desenvolvimento web para empresas que querem crescer online.",
  "Criamos e gerenciamos lojas virtuais com as melhores práticas SEO."
];

export default function FrasesRotativas() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const intervalo = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % frases.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  if (!isMounted) {
    // Retorna null ou uma versão estática, para evitar mismatch
    return <div className="frase-animada fade-in">{frases[0]}</div>;
  }

  return (
    <div className={`frase-animada ${fade ? 'fade-in' : 'fade-out'}`}>
      {frases[index]}
    </div>
  );
}
