import React from 'react'

const ForWhomSection = () => {
  return (
    <section id="for-whom" className="w-full py-16 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Para quem é?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Vendas</h3>
            <p className="text-gray-600">Gere leads, faça qualificação e conduza follow-up direto no WhatsApp com eficiência.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Suporte e Sucesso do Cliente</h3>
            <p className="text-gray-600">Triagem, SLAs, base de conhecimento e transferência fluida para humano quando necessário.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Cobrança e Backoffice</h3>
            <p className="text-gray-600">Envie notificações, gere segunda via e acompanhe solicitações de forma organizada.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Operações e Logística</h3>
            <p className="text-gray-600">Status de pedidos, rastreio, comunicação transacional e atualização em tempo real.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWhomSection 