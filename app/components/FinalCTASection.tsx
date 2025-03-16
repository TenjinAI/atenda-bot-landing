"use client"

import React from 'react'

const FinalCTASection = () => {
  return (
    <section id="contato" className="w-full py-20 px-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🔹 Pronto para automatizar seu atendimento?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Transforme seu agendamento com IA e nunca mais perca um cliente por falta de resposta rápida.
        </p>
        <a
          href="https://www.app.atenda.bot/login"
          className="px-8 py-4 text-lg font-medium bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
        >
          Comece Agora
        </a>
      </div>
    </section>
  )
}

export default FinalCTASection 