import React from 'react'

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Cadastre seus profissionais e serviços</h3>
            <p className="text-gray-600">Configure facilmente todo o seu catálogo de serviços e equipe em nossa plataforma intuitiva.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Conecte ao WhatsApp ou Telegram</h3>
            <p className="text-gray-600">Integração simples com as principais plataformas de mensagens para atender seus clientes onde eles estão.</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">A IA responde e agenda automaticamente</h3>
            <p className="text-gray-600">Nossa inteligência artificial cuida de todo o processo de agendamento sem intervenção humana.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span>Rápido</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span>Fácil</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            <span>Sempre disponível</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection 