import { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Só roda no cliente

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isMounted]);

  if (!isMounted) {
    // Renderiza só um container básico no SSR (sem a classe is-visible)
    return <div ref={domRef} className="fade-in-section">{children}</div>;
  }

  // Agora renderiza com o estado real no cliente
  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
