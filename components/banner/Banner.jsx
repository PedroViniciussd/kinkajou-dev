'use client'
import React from 'react'
import './style.css'
import FrasesRotativas from '../frasesRotativas/FrasesRotativas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Banner({ onMostrarConteudo }) {
  const scrollToContent = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  if (onMostrarConteudo) onMostrarConteudo();

  setTimeout(() => {
    const target = document.getElementById('conteudo-abaixo');
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, 100);
};


  return (
    <div
      className="banner-fullscreen"
      style={{
        backgroundImage: `url(/assets/image/kinkajou-dev.jpg)`
      }}
    >
      <div className="banner-overlay">
        <div className="container">
          <FrasesRotativas />
        </div>
        <button className="scroll-down-button" aria-label="Scroll down" onClick={scrollToContent}>
          <FontAwesomeIcon icon={faArrowDown} className="seta-degrade" />
        </button>
      </div>
    </div>
    
  )
}

export default Banner
