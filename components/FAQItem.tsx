'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  children: React.ReactNode
}

export default function FAQItem({ question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-xl border transition-all duration-200 ${open ? 'border-violet-200 shadow-sm shadow-violet-50' : 'border-gray-200'}`}>
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900 text-sm">{question}</span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {children}
        </div>
      </div>
    </div>
  )
}
