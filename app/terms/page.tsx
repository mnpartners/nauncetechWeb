import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Nuance Tech Terms of Service for MindWeave.',
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 border-b border-gray-100 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Effective Date: April 4, 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800">
          <p>
            Welcome to MindWeave, operated by Nuance Tech. By using our app, you agree to these Terms of Service.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using MindWeave, you agree to be bound by these Terms. If you do not agree, please do not use the app.
          </p>

          <h2>2. Description of Service</h2>
          <p>MindWeave is a mental wellness application that provides:</p>
          <ul>
            <li>AI-powered journaling with cognitive analysis</li>
            <li>Mood tracking and trend visualization</li>
            <li>Health metrics integration (HealthKit / Health Connect)</li>
            <li>AI chat for cognitive behavioral therapy (CBT) support</li>
            <li>Focus timer and meditation sessions</li>
          </ul>

          <h2>3. Not a Medical Service</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 not-prose mb-6">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong className="text-amber-900">MindWeave is not a substitute for professional medical advice, diagnosis, or treatment.</strong> The AI-generated insights and conversations are for wellness and self-reflection purposes only. Always consult with a qualified healthcare provider for medical concerns. If you are in crisis, please contact your local emergency services or the <strong>988 Suicide &amp; Crisis Lifeline</strong>.
            </p>
          </div>

          <h2>4. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to notify us of any unauthorized use of your account.
          </p>

          <h2>5. Subscriptions &amp; Payments</h2>
          <p>MindWeave offers both free and premium features:</p>
          <ul>
            <li><strong>Free Tier</strong> — 5 AI chat messages per day, 3 AI analyses per week, basic journaling and mood tracking.</li>
            <li><strong>Premium</strong> — Unlimited AI conversations and analyses, advanced insights, 90-day trend charts, CSV export, and more.</li>
          </ul>
          <p>
            Subscriptions are managed through Apple App Store or Google Play Store. Payment is charged to your store account. Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period.
          </p>

          <h2>6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the app for any unlawful purpose.</li>
            <li>Attempt to reverse engineer, decompile, or disassemble the app.</li>
            <li>Interfere with or disrupt the app&apos;s services or servers.</li>
            <li>Share your account credentials with others.</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            MindWeave and its original content, features, and functionality are owned by Nuance Tech. Your journal entries and personal data remain your property.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Nuance Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the app. The app is provided &ldquo;AS IS&rdquo; without warranties of any kind.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your account at our sole discretion if you violate these Terms. You may delete your account at any time through the app&apos;s Profile screen.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <a href="mailto:support@nuancetech.app">support@nuancetech.app</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
