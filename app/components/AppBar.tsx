"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AppBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/assets/small-logo-light.png"
              alt="Atenda.bot Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-baseline">
            <span className="text-gray-800 text-xl font-normal tracking-tight">Atenda</span>
            <span className="text-blue-600 text-xl font-bold tracking-tight">.bot</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection('for-whom')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Para Quem
          </button>
          <button
            onClick={() => scrollToSection('why-use')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Por que Usar
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="https://www.app.atenda.bot/login"
            className="px-6 py-2 text-blue-600 font-medium border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
          >
            Entrar
          </Link>
          <button
            onClick={() => scrollToSection('contato')}
            className="px-6 py-2 text-white font-medium bg-blue-600 rounded-full hover:bg-blue-700 transition-colors hidden md:block"
          >
            Comece Agora
          </button>
        </div>
      </nav>
    </header>
  )
}

export default AppBar 