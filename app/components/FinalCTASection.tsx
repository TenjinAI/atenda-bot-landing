"use client"

import React from 'react'

const FinalCTASection = () => {
  return (
    <section id="contato" className="w-full py-20 px-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🔹 Pronto para elevar seu atendimento B2B no WhatsApp?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Fale com nosso time e veja como a API oficial do WhatsApp pode transformar sua operação e a experiência dos seus clientes.
        </p>
        <a
          href="mailto:contato@atenda.bot?subject=Contato%20-%20Atenda.bot&body=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20atendimento%20B2B%20no%20WhatsApp%20(API%20oficial)."
          className="px-8 py-4 text-lg font-medium bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
        >
          Fale conosco
        </a>
      </div>
    </section>
  )
}

export default FinalCTASection 