import React from 'react'
import { MessageSquare, Calendar, Settings } from 'lucide-react'

const WhyUseSection = () => {
  return (
    <section id="why-use" className="w-full py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que usar a Atenda.bot?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-5">
              <MessageSquare className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">API oficial do WhatsApp (WABA)</h3>
            <p className="text-gray-600">Confiabilidade, templates aprovados e alta entregabilidade com conformidade às políticas da Meta.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-5">
              <Calendar className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Atendimento personalizado e SLAs</h3>
            <p className="text-gray-600">Roteamento inteligente por fila/equipe, horário comercial, regras por segmento e acompanhamento de SLAs.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-5">
              <Settings className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrações e automações</h3>
            <p className="text-gray-600">Conecte CRM/ERP via webhooks, dispare eventos, consolide dados e crie automações de ponta a ponta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUseSection 