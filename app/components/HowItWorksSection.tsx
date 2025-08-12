import React from 'react'

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Conecte à API oficial do WhatsApp</h3>
            <p className="text-gray-600">Número verificado, templates aprovados e homologação. Sem gambiarras, com alta entregabilidade.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Defina fluxos e regras de atendimento</h3>
            <p className="text-gray-600">Roteamento por fila e equipe, SLAs, horários de atendimento, respostas rápidas e personalização por segmento.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Integre, mensure e evolua</h3>
            <p className="text-gray-600">Conecte CRM/ERP via webhooks, acompanhe relatórios em tempo real e automatize ponta a ponta.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span>API oficial</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span>Escalável</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span>Seguro</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection 