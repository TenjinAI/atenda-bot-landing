"use client"

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-400">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">© {currentYear} Atenda.bot - Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.iubenda.com/privacy-policy/73254949"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Política de Privacidade"
            >
              Política de Privacidade
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/73254949/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Política de Cookies"
            >
              Política de Cookies
            </a>
            <span className="text-sm">
              Criado por{' '}
              <Link
                href="https://tenjin.com.br"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                tenjin.com.br
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
    </footer>
  )
}

export default Footer 