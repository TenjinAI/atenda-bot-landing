"use client"

import React from 'react'

const HeroSection = () => {
  return (
    <section id="hero" className="w-full pt-32 pb-20 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white md:pt-40 md:pb-32">
      <div className="container max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          🔹 Atenda.bot – Atendimento personalizado via API oficial do WhatsApp
        </h1>
        {/* Floating Dots and Lines */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
          {/* Small dots */}
          <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" style={{ top: '20%', left: '10%', animationDuration: '4s' }}></div>
          <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" style={{ top: '32%', left: '85%', animationDuration: '4.2s' }}></div>
          <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-200 animate-pulse" style={{ top: '10%', left: '50%', animationDuration: '3.8s' }}></div>

          {/* Medium dots */}
          <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse" style={{ top: '40%', left: '80%', animationDuration: '4.8s' }}></div>
          <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" style={{ top: '60%', left: '70%', animationDuration: '4.5s' }}></div>
          <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-300 animate-pulse" style={{ top: '15%', left: '35%', animationDuration: '4.7s' }}></div>

          {/* Large dots */}
          <div className="absolute h-4 w-4 rounded-full bg-blue-600 animate-pulse opacity-70" style={{ top: '50%', left: '15%', animationDuration: '6s' }}></div>
          <div className="absolute h-4 w-4 rounded-full bg-cyan-600 animate-pulse opacity-70" style={{ top: '25%', left: '90%', animationDuration: '6.5s' }}></div>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Centralize e personalize o atendimento no WhatsApp com automações, roteamento por equipes, SLAs e integrações com suas ferramentas de negócio.
        </p>
        <a
          href="mailto:contato@atenda.bot?subject=Contato%20-%20Atenda.bot&body=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20solu%C3%A7%C3%A3o%20de%20atendimento%20B2B%20via%20API%20oficial%20do%20WhatsApp."
          className="inline-block px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Fale conosco
        </a>
      </div>
    </section>
  )
}

export default HeroSection 