'use client'

import React from 'react'
import { RevealSection } from './RevealSection'

interface ExperienceCardProps {
  date: string
  company: string
  role: string
  description: string
}

export const ExperienceCard = ({ date, company, role, description }: ExperienceCardProps) => {
  return (
    <RevealSection>
      <div className="group border-t pt-8 flex flex-col md:flex-row gap-8" style={{ borderColor: 'var(--border)' }}>
        <div className="md:w-1/3">
          <p className="text-sm opacity-40 mb-2">{date}</p>
          <h3 className="text-2xl font-semibold">{company}</h3>
          <p className="text-lg opacity-50 mt-1">{role}</p>
        </div>
        <div className="md:w-2/3">
          <p className="text-xl opacity-70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </RevealSection>
  )
}

