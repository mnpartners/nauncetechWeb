import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-semibold text-gray-900 text-sm">Nuance Tech</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building thoughtful, AI-powered apps that help people understand themselves better.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 sm:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Company</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Projects</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Help</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/support" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Support</Link>
                </li>
                <li>
                  <a href="mailto:support@nuancetech.app" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Nuance Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
