import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nuance Tech — Thoughtful AI-powered apps',
}

const AppStoreBadge = () => (
  <a
    href="https://apps.apple.com/us/app/mindweave-journal-wellness/id6761665966"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 bg-gray-950 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
  >
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <span>
      <span className="block text-xs text-gray-400 leading-none mb-0.5">Download on the</span>
      <span className="block text-sm font-semibold leading-none">App Store</span>
    </span>
  </a>
)


const features = [
  { icon: '📓', label: 'Smart Journaling', desc: 'Guided prompts and encrypted private entries' },
  { icon: '🤖', label: 'AI Coach', desc: 'CBT-based support and daily reflection' },
  { icon: '❤️', label: 'Health Sync', desc: 'Integrates with Apple Health & Health Connect' },
  { icon: '📊', label: 'Insights', desc: 'Uncover hidden patterns in your data' },
]

const supportItems = [
  {
    icon: '✉️',
    title: 'Email Support',
    desc: "Reach out directly at support@nuancetech.app. We typically respond within 24 hours.",
    href: 'mailto:support@nuancetech.app',
    label: 'Send an email',
    external: true,
  },
  {
    icon: '💳',
    title: 'Account & Billing',
    desc: 'Questions about subscriptions, payments, or your account.',
    href: '/support',
    label: 'Learn more',
    external: false,
  },
  {
    icon: '🐛',
    title: 'Report a Bug',
    desc: "Found something that doesn't look right? Let us know.",
    href: '/support',
    label: 'Report issue',
    external: false,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-violet-100 shadow-sm shadow-violet-50 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-sm text-violet-700 font-medium">MindWeave is now available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
            Build better habits{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              for your mind
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Thoughtfully designed apps that support mental wellness, personal growth, and emotional intelligence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* MindWeave App Showcase */}
      <section id="projects" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Apps</h2>
            <p className="text-gray-500">Carefully crafted tools for a healthier mind</p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl border border-violet-100 p-5 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/app-logo.png"
                  alt="MindWeave"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-lg shadow-violet-200"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">MindWeave</h3>
                  <span className="text-xs bg-violet-100 text-violet-700 font-semibold px-2.5 py-1 rounded-full">
                    Available Now
                  </span>
                </div>
                <p className="text-violet-600 font-medium mb-4">AI-powered mental wellness companion</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Journal your thoughts, track your mood, and let an intelligent correlation engine uncover hidden patterns between your emotions, sleep, activity, and daily habits. Features guided breathing and meditation, an AI coach trained in CBT techniques, and end-to-end encrypted journaling.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {features.map((f) => (
                    <div
                      key={f.label}
                      className="bg-white rounded-xl p-4 border border-violet-100 hover:border-violet-200 hover:shadow-sm transition-all"
                    >
                      <span className="text-2xl block mb-2">{f.icon}</span>
                      <p className="text-xs font-semibold text-gray-800 mb-1">{f.label}</p>
                      <p className="text-xs text-gray-500 leading-snug">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <AppStoreBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">See it in action</h2>
            <p className="text-gray-500">A thoughtful experience built for your daily wellness journey</p>
          </div>

          <div className="flex items-end justify-center gap-4 sm:gap-8">
            {/* Left screenshot — Journal */}
            <div className="hidden sm:block w-44 -rotate-3 opacity-70 hover:opacity-100 hover:-rotate-1 transition-all duration-500 ease-out cursor-default">
              <div className="rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/[0.06] bg-gradient-to-b from-violet-50 to-indigo-50" style={{ aspectRatio: '390/844' }}>
                <Image
                  src="/screenshots/journal.png"
                  alt="MindWeave Journal"
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-xs text-gray-400 mt-3 font-medium">Journal</p>
            </div>

            {/* Center screenshot — Home (hero) */}
            <div className="w-56 sm:w-64 z-10">
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(109,40,217,0.18)] ring-1 ring-black/[0.06] bg-gradient-to-b from-violet-100 to-indigo-100" style={{ aspectRatio: '390/844' }}>
                <Image
                  src="/screenshots/home.png"
                  alt="MindWeave Home Dashboard"
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-xs font-semibold text-gray-500 mt-3">Home Dashboard</p>
            </div>

            {/* Right screenshot — Wellness */}
            <div className="hidden sm:block w-44 rotate-3 opacity-70 hover:opacity-100 hover:rotate-1 transition-all duration-500 ease-out cursor-default">
              <div className="rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/[0.06] bg-gradient-to-b from-violet-50 to-indigo-50" style={{ aspectRatio: '390/844' }}>
                <Image
                  src="/screenshots/wellness.png"
                  alt="MindWeave Wellness Guide"
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-xs text-gray-400 mt-3 font-medium">Wellness Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Quick Access */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Need Help?</h2>
            <p className="text-gray-500">We're here whenever you need us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {supportItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-violet-200 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-violet-600 hover:text-violet-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  {item.label}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors shadow-sm shadow-violet-200"
            >
              Visit Help Center
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
