import React from 'react'

const ForWhomSection = () => {
  return (
    <section id="for-whom" className="w-full py-16 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Para Quem?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Clínicas e Consultórios</h3>
            <p className="text-gray-600">Agende consultas médicas, odontológicas e de especialidades de forma automatizada.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Salões de Beleza e Barbearias</h3>
            <p className="text-gray-600">Otimize o agendamento de cortes, tratamentos e serviços estéticos.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Personal Trainers e Academias</h3>
            <p className="text-gray-600">Gerencie horários de treinos e aulas com praticidade e eficiência.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-500 text-2xl mb-3">✔</div>
            <h3 className="text-xl font-semibold mb-2">Qualquer negócio que precise de agendamentos</h3>
            <p className="text-gray-600">Solução adaptável para todo tipo de serviço que exija marcação de horários.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWhomSection 