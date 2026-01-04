'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface FooterProps {
  darkMode: boolean
}

export const Footer = ({ darkMode }: FooterProps) => {
  const { t } = useLanguage()

  return (
    <div className='relative mx-auto max-w-[1120px] mt-12'>
      {darkMode && (
        <>
          <motion.div
            className="absolute w-[70%] md:w-[50%] h-[452px] rounded-full pointer-events-none select-none md:right-[180px] -right-0 -top-[160px] -z-10 bg-radialPink"
          />
          
          <motion.div
            className="absolute w-[70%] md:w-[50%] h-[452px] rounded-full pointer-events-none select-none -top-[160px] md:left-[180px] -left-0 -z-10 bg-radialPink"
          />
        </>
      )}
      <footer 
        className="max-w-4xl h-[300px] mx-auto p-12 rounded-[40px] border text-center relative dark:bg-black white:bg-white"
        style={{ 
          borderColor: 'var(--border)'
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('footer.title')}</h2>
        <div className="flex flex-col items-center gap-4">
          <a 
            href="mailto:nicolasmdesouza@gmail.com" 
            className="text-lg lowercase font-medium px-6 py-2 border rounded-full transition-all duration-300 hover:scale-105 inline-block"
            style={{ borderColor: 'var(--border)' }}
          >
            nicolasmdesouza@gmail.com
          </a>
          <p className="text-xs opacity-30 uppercase tracking-widest">
            {t('footer.location')}
          </p>
        </div>
      </footer>
    </div>
  )
}

