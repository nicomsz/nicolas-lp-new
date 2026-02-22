'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface ExperienceItem {
  date: string
  company: string
  role: string
  description: string
}

interface ExperienceStackProps {
  items: ExperienceItem[]
}

const CARD_OFFSET = 15 // px between each stacked card peek

const StackCard = ({
  item,
  index,
  progress,
  range,
  targetScale,
}: {
  item: ExperienceItem
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="h-[50vh] sticky"
      style={{ top: `${128 + index * CARD_OFFSET}px` }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full h-[420px] md:h-[320px] origin-top overflow-hidden rounded-2xl p-8 md:p-10 shadow-xl"
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
          }}
        />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3">
              <p className="text-sm opacity-40 mb-2 font-mono">{item.date}</p>
              <h3 className="text-2xl font-semibold">{item.company}</h3>
              <p className="text-lg opacity-50 mt-1">{item.role}</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-base opacity-70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const ExperienceStack = ({ items }: ExperienceStackProps) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={container} className="pb-[50vh]">
      {items.map((item, index) => {
        const targetScale = 1 - (items.length - index) * 0.05
        const range: [number, number] = [index * (1 / items.length), 1]

        return (
          <StackCard
            key={item.company}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}
