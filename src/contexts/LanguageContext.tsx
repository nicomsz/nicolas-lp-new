'use client'

import React, { createContext, useContext, useState } from 'react'

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
    
    'hero.subtitle': 'Proactive and highly communicative developer with strong product vision, shaped by working on both product and development fronts across multiple startups.',
    
    'about.title': 'About',
    'about.introduction.prefix': 'I\'m an experienced',
    'about.introduction.location': 'fullstack (backend & frontend) developer',
    'about.introduction.suffix': ' based in Blumenau, Brazil, with',
    'about.introduction.highlight': '5 years of experience in software development',
    
    'about.passion.prefix': 'I\'m',
    'about.passion.highlight': 'fluent in English',
    'about.passion.suffix': ' and comfortable collaborating with international teams.',
    
    'about.approach.prefix': 'I have strong experience in product-focused development with a great sense of UX/UI, always aligning design and functionality with the product\'s goals. I\'ve worked with modern technologies like',
    'about.approach.highlight': 'React, React Native, Next.js, NestJS, NodeJS, and Web3 integration tools',
    'about.approach.suffix': '. I also have hands-on experience with 3D web-based engines such as Three.js and React Three Fiber, delivering interactive, modern, and immersive web experiences. Additionally, I have experience working with AWS and cloud infrastructure, including deployment, environment configuration, and scalability considerations.',
    
    'about.productSense.prefix': 'I\'m passionate about delivering',
    'about.productSense.highlight': 'scalable, high-performance products that create real impact',
    'about.productSense.suffix': '. I thrive in dynamic, fast-paced environments and enjoy taking projects from concept to completion.',

    'experience.title': 'Professional Path',
    'experience.stealth.role': 'Full-stack Developer',
    'experience.stealth.date': 'Sep 2025 — Jan 2026',
    'experience.stealth.description': 'At this startup, I worked on the development and maintenance of a web application with over 2,000 daily active users, contributing directly to the product\'s evolution. I was involved in both front-end and back-end development, building modern and responsive interfaces using Next.js and React best practices, as well as developing scalable APIs and microservices with Python and Node.js. Eventually, I had to leave the startup after the company decided to step back and discontinue the product.',
    
    'experience.dooor.role': 'Head of Front-end',
    'experience.dooor.date': 'Feb 2025 — Sep 2025',
    'experience.dooor.description': 'At this startup, I was responsible for leading the front-end team, composed of three developers in addition to myself, ensuring the delivery of high-quality solutions aligned with product goals. I contributed to blockchain and Web3 projects, including wallet integrations and smart contract interactions. I designed and implemented multiple product features, from building intuitive and responsive interfaces using Next.js and React to handling API integrations and delivering optimized UX/UI experiences. I had full ownership of the front-end development lifecycle, including authentication, routing, navigation, and interactivity, always focusing on performance, visual consistency, and a smooth user experience. I also collaborated closely with the back-end using NestJS (Node.js) to ensure scalable and efficient integrations.',
    
    'experience.scalable.role': 'Fullstack Developer',
    'experience.scalable.date': 'Oct 2023 — Feb 2025',
    'experience.scalable.description': 'At this startup, I was responsible for developing the back end of a comprehensive financial platform using NestJS, TypeScript, and Prisma ORM, with a strong focus on security, scalability, and maintainability. I implemented secure authentication, Open Finance integrations, credit operations management, and payment processing, working with a scalable multi-database architecture designed for growth. In addition, I contributed to the front end by building intuitive interfaces and actively providing UI/UX insights and product ideas that enhanced the overall user experience and business value.',
    
    'experience.blocklize.role': 'Web3 Front-end Developer',
    'experience.blocklize.date': 'May 2023 — Feb 2024',
    'experience.blocklize.description': 'I was responsible for front-end development using Next.js and SCSS, building intuitive interfaces for portfolio visualization and transaction execution involving ERC-20 and ERC-721 tokens. I implemented solutions aimed at optimizing user experience in digital asset management, with a strong focus on security, usability, and clarity during blockchain operations.',
    
    'footer.title': 'Let\'s build the future.',
    'footer.location': 'Based in Santa Catarina, Brazil',
  },
  pt: {
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'nav.language': 'EN',
    
    'hero.subtitle': 'Desenvolvedor proativo e altamente comunicativo com forte visão de produto, moldado trabalhando nas frentes de produto e desenvolvimento em várias startups.',
    
    'about.title': 'Sobre',
    'about.introduction.prefix': 'Sou um desenvolvedor',
    'about.introduction.location': 'fullstack (backend & frontend)',
    'about.introduction.suffix': ' experiente, baseado em Blumenau, Brasil, com',
    'about.introduction.highlight': '5 anos de experiência em desenvolvimento de software',
    
    'about.passion.prefix': 'Sou',
    'about.passion.highlight': 'fluente em inglês',
    'about.passion.suffix': ' e confortável colaborando com equipes internacionais.',
    
    'about.approach.prefix': 'Tenho forte experiência em desenvolvimento focado em produto com grande senso de UX/UI, sempre alinhando design e funcionalidade com os objetivos do produto. Trabalhei com tecnologias modernas como',
    'about.approach.highlight': 'React, React Native, Next.js, NestJS, NodeJS e ferramentas de integração Web3',
    'about.approach.suffix': '. Também tenho experiência prática com engines 3D para web como Three.js e React Three Fiber, entregando experiências web interativas, modernas e imersivas. Além disso, tenho experiência trabalhando com AWS e infraestrutura em nuvem, incluindo deploy, configuração de ambientes e considerações de escalabilidade.',
    
    'about.productSense.prefix': 'Sou apaixonado por entregar',
    'about.productSense.highlight': 'produtos escaláveis e de alta performance que criam impacto real',
    'about.productSense.suffix': '. Prospero em ambientes dinâmicos e de ritmo acelerado e gosto de levar projetos do conceito até a conclusão.',
    
    'experience.title': 'Trajetória Profissional',
    'experience.stealth.role': 'Desenvolvedor Full-stack',
    'experience.stealth.date': 'Set 2025 — Jan 2026',
    'experience.stealth.description': 'Nessa startup, atuei no desenvolvimento e manutenção de uma aplicação web com mais de 2.000 usuários ativos diários, participando diretamente da evolução do produto. Trabalhei tanto no front-end, desenvolvendo interfaces modernas e responsivas com Next.js e boas práticas do ecossistema React, quanto no back-end, criando APIs e microserviços escaláveis com Python e Node.js. Posteriormente, precisei deixar a startup após a empresa decidir recuar e descontinuar o produto.',
    
    'experience.dooor.role': 'Head of Front-end',
    'experience.dooor.date': 'Fev 2025 — Set 2025',
    'experience.dooor.description': 'Nessa startup, fui responsável por liderar o time de front-end, composto por três desenvolvedores além de mim, garantindo a entrega de soluções de alta qualidade alinhadas aos objetivos do produto. Atuei em projetos de blockchain e Web3, incluindo integração de carteiras e interação com smart contracts. Trabalhei no design e na implementação de diversas funcionalidades do produto, desde a criação de interfaces intuitivas e responsivas com Next.js e React até a integração com APIs e a entrega de experiências UX/UI otimizadas. Tive ownership completo do ciclo de desenvolvimento front-end, incluindo autenticação, rotas, navegação e interatividade, sempre com foco em desempenho, elegância visual e uma experiência de usuário fluida. Também colaborei com o back-end utilizando NestJS (Node.js) para garantir integrações eficientes e escaláveis.',
    
    'experience.scalable.role': 'Desenvolvedor Fullstack',
    'experience.scalable.date': 'Out 2023 — Fev 2025',
    'experience.scalable.description': 'Nessa startup, fui responsável pelo desenvolvimento do back-end de uma plataforma financeira completa, utilizando NestJS, TypeScript e Prisma ORM, com foco em segurança, escalabilidade e manutenibilidade. Implementei autenticação segura, integrações com Open Finance, gestão de operações de crédito e processamento de pagamentos, trabalhando com uma arquitetura multi-database pensada para alto volume e crescimento. Além disso, atuei no front-end, desenvolvendo interfaces intuitivas e contribuindo ativamente com insights de UI/UX e ideias de produto que ajudaram a melhorar a experiência do usuário e agregar valor ao negócio.',
    
    'experience.blocklize.role': 'Desenvolvedor Front-end Web3',
    'experience.blocklize.date': 'Mai 2023 — Fev 2024',
    'experience.blocklize.description': 'Fui responsável pelo desenvolvimento do front-end utilizando Next.js e SCSS, criando interfaces intuitivas para visualização de portfólio e execução de transações com tokens ERC-20 e ERC-721. Implementei soluções focadas na otimização da experiência do usuário no gerenciamento de ativos digitais, com atenção especial à segurança, usabilidade e clareza durante operações em blockchain.',
    
    'footer.title': 'Vamos construir o futuro.',
    'footer.location': 'Baseado em Santa Catarina, Brasil',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  React.useEffect(() => {
    const savedLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('language='))
      ?.split('=')[1] as Language | undefined
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    document.cookie = `language=${lang}; path=/; max-age=31536000` // 1 year
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
