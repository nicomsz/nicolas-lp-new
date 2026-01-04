'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.language': 'PT',
    
    'hero.subtitle': 'Full-stack developer with 5 years of experience building scalable web applications and blockchain solutions.',
    
    'about.title': 'About',
    'about.introduction.prefix': 'From',
    'about.introduction.location': 'Santa Catarina, Brazil',
    'about.introduction.suffix': ', I\'m a developer with extensive experience in startups, combining an extraordinary product vision with expertise in',
    'about.introduction.highlight': 'UX/UI design',
    
    'about.passion.prefix': 'As a programmer, I constantly stay updated with the latest technologies, driven by a',
    'about.passion.highlight': 'deep passion for programming',
    'about.passion.suffix': 'and innovation.',
    
    'about.approach.prefix': 'My approach is',
    'about.approach.highlight': 'extremely proactive',
    'about.approach.suffix': ', generating positive impact in all areas: in relationships between people, team dynamics, and product development.',
    
    'about.productSense.prefix': 'I have a strong',
    'about.productSense.highlight': 'product sense focused on startups',
    'about.productSense.suffix': ', deeply understanding the needs for rapid growth and scalability.',

    'experience.title': 'Professional Path',
    'experience.stealth.role': 'Full-stack Developer',
    'experience.stealth.date': 'Sep 2025 — Present',
    'experience.stealth.description': 'Leading front-end development for applications with 2k+ daily active users. Architecting scalable APIs and microservices using Python and Node.js.',
    
    'experience.dooor.role': 'Head of Frontend',
    'experience.dooor.date': 'Feb 2025 — Sep 2025',
    'experience.dooor.description': 'Led a team of 3 frontend developers for blockchain solutions. Crafted intuitive UI using Next.js, Wagmi, and Viem.',
    
    'experience.scalable.role': 'Full-stack Developer',
    'experience.scalable.date': 'Oct 2023 — Feb 2025',
    'experience.scalable.description': 'Engineered multi-database systems for high-performance payment processing using NestJS and Prisma.',
    
    'footer.title': 'Let\'s build the future.',
    'footer.location': 'Based in Santa Catarina, Brazil',
  },
  pt: {
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'nav.language': 'EN',
    
    'hero.subtitle': 'Desenvolvedor Full-stack com 5 anos de experiência construindo aplicações web escaláveis e soluções blockchain.',
    
    'about.title': 'Sobre',
    'about.introduction.prefix': 'Natural de',
    'about.introduction.location': 'Santa Catarina, Brasil',
    'about.introduction.suffix': ', sou um desenvolvedor com experiência ampla em startups, combinando uma extraordinária visão de produto com expertise em',
    'about.introduction.highlight': 'UX/UI design',
    
    'about.passion.prefix': 'Como programador, me mantenho constantemente atualizado com as tecnologias mais recentes, movido por uma',
    'about.passion.highlight': 'profunda paixão por programação',
    'about.passion.suffix': 'e inovação.',
    
    'about.approach.prefix': 'Minha abordagem é',
    'about.approach.highlight': 'extremamente proativa',
    'about.approach.suffix': ', gerando impacto positivo em todos os âmbitos: nas relações entre pessoas, na dinâmica dos times e no desenvolvimento de produtos.',
    
    'about.productSense.prefix': 'Possuo um grande',
    'about.productSense.highlight': 'senso de produto voltado a startups',
    'about.productSense.suffix': ', entendendo profundamente as necessidades de crescimento rápido e escalabilidade.',
    
    'experience.title': 'Trajetória Profissional',
    'experience.stealth.role': 'Desenvolvedor Full-stack',
    'experience.stealth.date': 'Set 2025 — Presente',
    'experience.stealth.description': 'Liderando desenvolvimento front-end para aplicações com mais de 2 mil usuários ativos diários. Arquitetando APIs escaláveis e microsserviços usando Python e Node.js.',
    
    'experience.dooor.role': 'Head of Frontend',
    'experience.dooor.date': 'Fev 2025 — Set 2025',
    'experience.dooor.description': 'Liderei uma equipe de 3 desenvolvedores frontend para soluções blockchain. Criando UI intuitiva usando Next.js, Wagmi e Viem.',
    
    'experience.scalable.role': 'Desenvolvedor Full-stack',
    'experience.scalable.date': 'Out 2023 — Fev 2025',
    'experience.scalable.description': 'Desenvolvi sistemas multi-database para processamento de pagamentos de alta performance usando NestJS e Prisma.',
    
    'footer.title': 'Vamos construir o futuro.',
    'footer.location': 'Baseado em Santa Catarina, Brasil',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('pt')) {
      setLanguage('pt')
    }
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

