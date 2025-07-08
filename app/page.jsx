'use client'

import { useState } from 'react'
import Banner from '@/components/banner/Banner'
import FadeInSection from '@/components/fadeinsection/FadeinSection'
import Projetos from '@/components/projetos/Projetos'
import Parceiros from '@/components/parceiros/Parceiros'
import ScrollToTopButton from '@/components/scrolltotop/ScrollToTop'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import Lottie from 'lottie-react'
import codingAnimation from "../public/assets/coding.json";

export default function Home() {
  const [mostrarConteudo, setMostrarConteudo] = useState(false)

  return (
    <>
      <Banner onMostrarConteudo={() => setMostrarConteudo(true)} />
                    <div className="topo borda-gradient"></div>
      {mostrarConteudo && (
        <>
          <section id="conteudo-abaixo">
            <div className="container">
              <FadeInSection>
 <section id="sobre">
      <div className="section-content">
        <div className="text text-background slide-in-shake">
          <h2>Sobre a Kinkajou</h2>
          <p>
            Desenvolvemos experiências digitais com personalidade, criatividade e muito código! Nosso foco vai muito além de criar sites bonitos — entregamos soluções que realmente funcionam para seu negócio crescer. Seja um site institucional, landing page, blog, loja online, app web ou sistema personalizado, cada projeto é feito com carinho e atenção para refletir a identidade única do cliente. Aqui, cada linha de código conta uma história — e pode apostar, a próxima pode ser a sua.
          </p>
        </div>
        <div className="project-preview shine-active">
          <Lottie 
            animationData={codingAnimation}
            loop={true}
            className="w-full max-w-[600px]" // controla largura máxima para responsividade
          />
        </div>
      </div>
    </section>
              </FadeInSection>
            </div>           <div className="topo borda-gradient"></div>
            <FadeInSection><Projetos /></FadeInSection>
            <div className="topo borda-gradient"></div>
            <div className='container'>
              <FadeInSection><Parceiros /></FadeInSection>
            </div>
            <div className="topo borda-gradient"></div>
            <FadeInSection>
              <section id="time" className="text-background time-animate">
                <div className="container time-container">
                  <div className="time-content">
                    <div className="time-text">
                      <h2 className="time-title">Nosso Time</h2>
                      <p className="time-description">
                        Sim, temos um time… de <strong>um só!</strong><br /><br />
                        Por trás da Kinkajou está <a href="https://pedroviniciussd.github.io/portfolio-pv/" target="_blank" rel="noopener noreferrer">Pedro Vinicius</a>, um dev solo apaixonado por transformar ideias em interfaces.
                        Quando o assunto é design funcional e código limpo, pode contar com dedicação total — da primeira reunião ao deploy final.
                        <br /><br />
                        Aqui, você fala direto com quem desenvolve: sem ruídos, sem enrolação. Só uma comunicação ágil, eficiente e cheia de empolgação pra criar algo incrível com você.
                      </p>
                    </div>

                    <div className="profile-photo">
                      <Image
                        src="/assets/image/img-time.webp"
                        alt="Desenvolvedor - Pedro Vinicius"
                        width={400}
                        height={400}
                        className="dev-img"
                      />
                    </div>
                  </div>
                </div>
              </section>

            </FadeInSection>


            <ScrollToTopButton />
            <div className="topo borda-gradient"></div>
          </section>

          {/* Mostrar footer só quando mostrarConteudo for true */}
          <Footer />
        </>
      )}
    </>
  )
}
