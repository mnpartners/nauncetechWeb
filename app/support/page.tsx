import type { Metadata } from 'next'
import FAQItem from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with MindWeave. Contact us, find answers in our FAQ, and manage your account.',
}

export default function SupportPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 border-b border-gray-100 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-gray-500">
            Need help with MindWeave or any of our apps? We're here for you.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12 sm:space-y-16">

        {/* Contact Form */}
        <section id="contact">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-lg">💬</div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <a
              href="mailto:support@nuancetech.app"
              className="inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 font-medium bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@nuancetech.app
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <form
              action="https://formsubmit.co/mn.nt.partners@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="MindWeave Support Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.nuancetech.app/support/thanks" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Topic
                </label>
                <div className="relative">
                  <select
                    id="topic"
                    name="topic"
                    required
                    className="w-full px-4 py-2.5 pr-10 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="General Question">General Question</option>
                    <option value="Account & Billing">Account &amp; Billing</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Privacy & Data">Privacy &amp; Data</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your issue or question..."
                  required
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-violet-600 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-violet-700 transition-colors shadow-sm shadow-violet-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* MindWeave FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-lg">🧠</div>
            <h2 className="text-2xl font-bold text-gray-900">MindWeave FAQ</h2>
          </div>

          <div className="space-y-3">
            <FAQItem question="How do I create a journal entry?">
              Tap the <strong>+</strong> button on the home screen to start a new journal entry. You can write about your day, attach photos, and tag your mood.
            </FAQItem>
            <FAQItem question="How does the AI coach work?">
              The AI coach uses cognitive behavioral therapy (CBT) techniques to help you explore your thoughts and feelings. Tap the <strong>Chat</strong> tab to start a conversation. Your data is sent securely to our AI service and is not used to train AI models.
            </FAQItem>
            <FAQItem question="How do I connect Apple Health?">
              Go to <strong>Settings</strong> in the app and tap <strong>Connect Apple Health</strong>. MindWeave can read sleep, steps, and heart rate data to find correlations with your mood.
            </FAQItem>
            <FAQItem question="What is the correlation engine?">
              MindWeave's AI analyzes patterns between your journal entries, mood ratings, and health data (sleep, activity, heart rate) to surface insights you might not notice on your own. The more data you log, the better the insights become.
            </FAQItem>
          </div>
        </section>

        {/* Account & Billing */}
        <section id="billing">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-lg">🔑</div>
            <h2 className="text-2xl font-bold text-gray-900">Account &amp; Billing</h2>
          </div>

          <div className="space-y-3">
            <FAQItem question="How do I manage my subscription?">
              On your iPhone, go to <strong>Settings → Apple ID → Subscriptions</strong> to view, change, or cancel your MindWeave Premium subscription. On Android, go to <strong>Google Play Store → Subscriptions</strong>.
            </FAQItem>
            <FAQItem question="How do I restore my purchase?">
              Open MindWeave, go to <strong>Settings</strong>, and tap <strong>Restore Purchases</strong>. This will restore any active subscription or lifetime purchase linked to your Apple ID or Google account.
            </FAQItem>
            <FAQItem question="Can I get a refund?">
              Refunds for App Store purchases are handled by Apple. Visit{' '}
              <a href="https://reportaproblem.apple.com" className="text-violet-600 hover:underline">reportaproblem.apple.com</a>{' '}
              to request a refund. For Google Play, visit{' '}
              <a href="https://support.google.com/googleplay/answer/2479637" className="text-violet-600 hover:underline">Google Play Help</a>.
            </FAQItem>
          </div>
        </section>

        {/* Bug Report */}
        <section id="report">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-lg">🐛</div>
            <h2 className="text-2xl font-bold text-gray-900">Report a Bug</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-sm text-amber-800 leading-relaxed">
              Found something that doesn&apos;t look right? Use the{' '}
              <a href="#contact" className="font-medium underline">contact form above</a>{' '}
              and select <strong>Bug Report</strong> as the topic. Include a brief description of the issue and we&apos;ll investigate as soon as possible.
            </p>
          </div>
        </section>

        {/* Privacy & Data */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-lg">🔒</div>
            <h2 className="text-2xl font-bold text-gray-900">Privacy &amp; Data</h2>
          </div>

          <div className="space-y-3">
            <FAQItem question="Is my journal data encrypted?">
              Yes. All journal entries are encrypted using AES-256 encryption before being stored. Only you can read your journal entries.
            </FAQItem>
            <FAQItem question="What data is sent to the AI?">
              When you use AI features (chat, analysis), your journal text, mood data, and health metrics are sent securely to our AI service (xAI) via an encrypted connection. Your data is not used to train AI models. See our{' '}
              <a href="/privacy" className="text-violet-600 hover:underline">Privacy Policy</a>{' '}
              for full details.
            </FAQItem>
            <FAQItem question="How do I delete my account?">
              Go to <strong>Settings</strong> in the app and tap <strong>Delete Account</strong>. This will permanently delete all your data from our servers. This action cannot be undone.
            </FAQItem>
          </div>
        </section>

      </div>
    </div>
  )
}
