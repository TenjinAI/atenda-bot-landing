"use client"

import { useEffect } from 'react'
import AppBar from '../components/AppBar'
import HeroSection from '../components/HeroSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ForWhomSection from '../components/ForWhomSection'
import WhyUseSection from '../components/WhyUseSection'
import FinalCTASection from '../components/FinalCTASection'
import Footer from '../components/Footer'

export default function PoliticaDePrivacidade() {
  useEffect(() => {
    let cancelled = false
    const start = Date.now()
    const maxWaitMs = 8000

    const tryOpen = () => {
      if (cancelled) return
      const iubendaReady = (window as any).iubenda || (window as any)._iub || (window as any).Iubenda
      const link = document.querySelector(
        'a[href="https://www.iubenda.com/privacy-policy/73254949"]'
      ) as HTMLAnchorElement | null
      const fallback = document.querySelector('.iubenda-embed') as HTMLAnchorElement | null

      if (iubendaReady && (link || fallback)) {
        const el = link || fallback
        el?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
        return
      }

      if (Date.now() - start < maxWaitMs) {
        window.setTimeout(tryOpen, 250)
      }
    }

    tryOpen()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <AppBar />
      <main className="flex min-h-screen flex-col items-center">
        <HeroSection />
        <HowItWorksSection />
        <ForWhomSection />
        <WhyUseSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}


