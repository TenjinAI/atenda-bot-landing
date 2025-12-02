import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atenda.bot - Atendimento via API oficial do WhatsApp',
  description: 'Solução profissional para atendimento ao cliente no WhatsApp: automações, roteamento, SLAs e integrações com suas ferramentas.',
  other: {
    'fb:app_id': '1322981302107488',
  },
  openGraph: {
    title: 'Atenda.bot - Atendimento via API oficial do WhatsApp',
    description: 'Solução profissional para atendimento ao cliente no WhatsApp: automações, roteamento, SLAs e integrações com suas ferramentas.',
    url: 'https://atenda.bot',
    siteName: 'Atenda.bot',
    images: [
      {
        url: 'https://atenda.bot/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atenda.bot - Atendimento via WhatsApp',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atenda.bot - Atendimento via API oficial do WhatsApp',
    description: 'Solução profissional para atendimento ao cliente no WhatsApp: automações, roteamento, SLAs e integrações com suas ferramentas.',
    images: ['https://atenda.bot/assets/og-image.png'],
  },
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