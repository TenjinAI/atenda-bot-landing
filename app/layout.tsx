import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atenda.bot - Atendimento via API oficial do WhatsApp',
  description: 'Solução profissional para atendimento ao cliente B2B no WhatsApp: automações, roteamento, SLAs e integrações com suas ferramentas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
      </body>
    </html>
  )
} 