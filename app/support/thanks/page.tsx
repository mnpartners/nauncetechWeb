import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message Sent',
  description: 'Your message has been received. We\'ll get back to you soon.',
}

export default function ThanksPage() {
  return (
    <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-100">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Message Sent!</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll review your message and get back to you as soon as possible — usually within 24 hours.
        </p>

        <Link
          href="/support"
          className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors shadow-sm shadow-violet-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Support
        </Link>
      </div>
    </div>
  )
}
