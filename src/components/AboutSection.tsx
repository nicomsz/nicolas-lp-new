'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { RevealSection } from './RevealSection'

export const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <section className="mb-60">
      <RevealSection>
        <div className="max-w-3xl">
          <h2 className="text-2xl uppercase tracking-[0.4em] opacity-30 font-bold mb-12">{t('about.title')}</h2>
          <div className="space-y-6 text-xl opacity-70 leading-relaxed">
            <p>
              {t('about.introduction.prefix')} <span className="opacity-100 font-medium">{t('about.introduction.location')}</span>{t('about.introduction.suffix')} <span className="opacity-100 font-medium">{t('about.introduction.highlight')}</span>.
            </p>
            
            <p>
              {t('about.passion.prefix')} <span className="opacity-100 font-medium">{t('about.passion.highlight')}</span> {t('about.passion.suffix')}
            </p>
            
            <p>
              {t('about.approach.prefix')} <span className="opacity-100 font-medium">{t('about.approach.highlight')}</span>{t('about.approach.suffix')}
            </p>
            
            <p>
              {t('about.productSense.prefix')} <span className="opacity-100 font-medium">{t('about.productSense.highlight')}</span>{t('about.productSense.suffix')}
            </p>
          </div>
        </div>
      </RevealSection>
    </section>
  )
}

