import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atenda.bot - Agendamentos Inteligentes no WhatsApp e Telegram',
  description: 'Automatize suas respostas e marque horários sem esforço. Mais clientes atendidos, menos tempo perdido.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 