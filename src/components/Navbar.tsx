'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface NavbarProps {
  isScrolled: boolean
  darkMode: boolean
  onToggleDarkMode: () => void
}

export const Navbar = ({ isScrolled, darkMode, onToggleDarkMode }: NavbarProps) => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  const navAnimationConfig = {
    width: isScrolled ? '850px' : '100%',
    borderRadius: isScrolled ? '9999px' : '0px',
    paddingLeft: isScrolled ? '0px' : '0px',
    paddingRight: isScrolled ? '0px' : '0px',
    paddingTop: isScrolled ? '16px' : '0px',
    paddingBottom: isScrolled ? '16px' : '0px',
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <motion.nav
        initial={false}
        animate={navAnimationConfig}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="flex justify-between items-center backdrop-blur-md"
        style={{
          backgroundColor: isScrolled ? 'var(--card-bg)' : 'transparent',
          borderWidth: isScrolled ? '1px' : '0px',
          borderColor: 'var(--border)',
        }}
      >
        <span className="font-bold ml-4 tracking-tighter whitespace-nowrap">{'</ >'}</span>
        <div className="flex gap-4 md:gap-6 items-center flex-shrink-0">
          <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-medium opacity-60 whitespace-nowrap">
            <a href="#exp" className="hover:opacity-100 transition-opacity">{t('nav.experience')}</a>
            <a href="mailto:nicolasmdesouza@gmail.com" className="hover:opacity-100 transition-opacity">{t('nav.contact')}</a>
          </div>
          <button 
            onClick={toggleLanguage}
            className="relative px-6 py-2 text-[10px] uppercase tracking-widest border rounded-full transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'var(--border)' }}
          >
            {t('nav.language')}
          </button>
          <button 
            onClick={onToggleDarkMode}
            className="relative px-6 mr-4 py-2 text-[10px] uppercase tracking-widest border rounded-full transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'var(--border)' }}
          >
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </motion.nav>
    </div>
  )
}

