"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const AppBar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (pathname !== '/') {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`)
      return
    }

    // If we're on home page, scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // height of the fixed navbar
      const top = element.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
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
        </a>

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
          <a
            href="mailto:contato@atenda.bot?subject=Contato%20-%20Atenda.bot&body=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20atendimento%20via%20API%20oficial%20do%20WhatsApp."
            className="px-6 py-2 text-white font-medium bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Fale conosco
          </a>
        </div>
      </nav>
    </header>
  )
}

export default AppBar 