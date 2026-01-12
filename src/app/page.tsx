'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ExperienceCard } from '@/components/ExperienceCard'
import { Footer } from '@/components/Footer'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [name, setName] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const fullName = "Nicolas Moraes de Souza."
  const { t } = useLanguage()

  useEffect(() => {
    const savedDarkMode = document.cookie
      .split('; ')
      .find(row => row.startsWith('darkMode='))
      ?.split('=')[1]
    
    if (savedDarkMode !== undefined) {
      setDarkMode(savedDarkMode === 'true')
    }
  }, [])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setName(fullName.slice(0, i))
      i++
      if (i > fullName.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.cookie = `darkMode=${darkMode}; path=/; max-age=31536000` // 1 year
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="selection:bg-zinc-500/30 min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        darkMode={darkMode} 
        onToggleDarkMode={() => setDarkMode(!darkMode)} 
      />

      <main className="max-w-5xl mx-auto px-6 pt-40 pb-32">
        <HeroSection name={name} />

        <AboutSection />

        <section id="exp" className="space-y-40">
          <h2 className="text-2xl uppercase tracking-[0.4em] opacity-30 font-bold">{t('experience.title')}</h2>

          <ExperienceCard
            date={t('experience.stealth.date')}
            company="Stealth Startup"
            role={t('experience.stealth.role')}
            description={t('experience.stealth.description')}
          />

          <ExperienceCard
            date={t('experience.dooor.date')}
            company="DOOOR | Web3"
            role={t('experience.dooor.role')}
            description={t('experience.dooor.description')}
          />

          <ExperienceCard
            date={t('experience.scalable.date')}
            company="Scalable | Fintech"
            role={t('experience.scalable.role')}
            description={t('experience.scalable.description')}
          />

          <ExperienceCard
            date={t('experience.blocklize.date')}
            company="Blocklize | Web3"
            role={t('experience.blocklize.role')}
            description={t('experience.blocklize.description')}
          />
        </section>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  )
}
