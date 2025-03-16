import React from 'react'
import { MessageSquare, Calendar, Settings } from 'lucide-react'

const WhyUseSection = () => {
  return (
    <section id="why-use" className="w-full py-16 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que Usar?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-5">
              <MessageSquare className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Respostas automáticas 24/7</h3>
            <p className="text-gray-600">Atenda seus clientes instantaneamente a qualquer hora do dia ou da noite, sem necessidade de operadores humanos.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-5">
              <Calendar className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Agenda sempre organizada</h3>
            <p className="text-gray-600">Evite sobreposições, mantenha controle total sobre disponibilidade e receba lembretes automáticos.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-5">
              <Settings className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fácil integração e uso</h3>
            <p className="text-gray-600">Configure em minutos e conecte com as ferramentas que você já utiliza no seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUseSection 