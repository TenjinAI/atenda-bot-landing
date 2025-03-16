"use client"

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-400">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Atenda.bot - Todos os direitos reservados.</p>
          </div>
          <div className="text-sm">
            Criado por{' '}
            <Link
              href="https://tenjin.com.br"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              tenjin.com.br
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 