"use client"

import AppBar from './components/AppBar'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import ForWhomSection from './components/ForWhomSection'
import WhyUseSection from './components/WhyUseSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

export default function Home() {
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