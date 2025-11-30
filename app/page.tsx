"use client"

import { useEffect } from 'react'
import AppBar from './components/AppBar'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import ForWhomSection from './components/ForWhomSection'
import WhyUseSection from './components/WhyUseSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

export default function Home() {
  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    if (!window.location.hash) return

    const hash = window.location.hash.substring(1) // Remove the #
    const offset = 80 // height of the fixed navbar
    let attempts = 0
    const maxAttempts = 20 // Max 20 attempts (~1 second total)

    const scrollToElement = () => {
      const element = document.getElementById(hash)
      if (element) {
        // Use requestAnimationFrame to ensure layout is complete
        requestAnimationFrame(() => {
          const top = element.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        })
      } else if (attempts < maxAttempts) {
        // Retry if element not found yet (page still rendering)
        attempts++
        setTimeout(scrollToElement, 50)
      }
    }

    // Start after initial render
    requestAnimationFrame(scrollToElement)
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