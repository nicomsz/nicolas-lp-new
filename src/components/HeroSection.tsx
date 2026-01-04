'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface HeroSectionProps {
  name: string
}

export const HeroSection = ({ name }: HeroSectionProps) => {
  const { t } = useLanguage()

  return (
    <section className="mb-60">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 gradient-text">
        {name}
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl opacity-50 font-medium">
        {t('hero.subtitle')}
      </p>
    </section>
  )
}

