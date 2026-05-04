import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Nuance Tech collects, uses, and protects your personal information in MindWeave.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 border-b border-gray-100 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Effective Date: April 4, 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800">
          <p>
            Nuance Tech (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the MindWeave mobile application. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Account Information</strong> — Email address used for authentication via Supabase Auth.</li>
            <li><strong>Journal Entries</strong> — Text entries you write in the app, including mood ratings (1–5 scale) you assign to each entry.</li>
            <li><strong>Health Data</strong> — With your explicit permission, we access Apple HealthKit or Google Health Connect data including: steps, heart rate, heart rate variability (HRV), sleep duration, and active energy burned.</li>
            <li><strong>Focus &amp; Meditation Sessions</strong> — Duration and type of mindfulness activities you complete within the app.</li>
            <li><strong>AI Chat Conversations</strong> — Messages you send in the AI chat feature for cognitive behavioral therapy (CBT) support.</li>
            <li><strong>Usage Data</strong> — App usage patterns such as journal streak counts and feature access frequency.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide personalized AI-driven cognitive analysis and mental wellness insights.</li>
            <li>To generate mood trend charts, correlations between health metrics and emotional state, and weekly summaries.</li>
            <li>To power the AI chat feature that provides CBT-based support and reflection prompts.</li>
            <li>To track your journaling streaks and mindfulness milestones.</li>
            <li>To manage your subscription and premium features via RevenueCat.</li>
          </ul>

          <h2>3. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Supabase</strong> — For secure authentication, database storage, and backend services. Your data is stored in Supabase&apos;s cloud infrastructure with row-level security.</li>
            <li><strong>xAI (Grok API)</strong> — For AI-powered journal analysis and chat conversations. Journal text and health context are sent to xAI&apos;s API for processing. xAI does not store your data beyond the API request.</li>
            <li><strong>RevenueCat</strong> — For managing in-app subscriptions and purchases. RevenueCat processes your subscription status but does not access your journal or health data.</li>
            <li><strong>Apple HealthKit / Google Health Connect</strong> — For reading health metrics with your permission. Health data is read locally on your device and is never sold or used for advertising.</li>
          </ul>

          <h2>4. Data Storage &amp; Security</h2>
          <p>Your data is protected with multiple layers of security:</p>
          <ul>
            <li><strong>End-to-End Encryption</strong> — All journal entries are encrypted on your device using AES-256 encryption before being transmitted or stored. Your encryption key is derived from your unique account credentials and stored securely on your device using platform-level secure storage (Keychain on iOS, Keystore on Android). This means your journal text cannot be read by anyone including us without your device credentials.</li>
            <li><strong>Row-Level Security</strong> — Your data is stored in Supabase with row-level security policies ensuring that only you can access your own data.</li>
            <li><strong>Transport Security</strong> — All data is transmitted over HTTPS/TLS encryption.</li>
            <li><strong>No Data Sales</strong> — We do not sell your personal data to third parties.</li>
          </ul>

          <h2>5. Health Data</h2>
          <p>We treat health data with the highest level of care:</p>
          <ul>
            <li>Health data is only accessed with your explicit permission.</li>
            <li>Health data is used solely to provide wellness insights and correlations within the app.</li>
            <li>We do not sell health data or use it for advertising purposes.</li>
            <li>You can revoke health data access at any time through your device settings.</li>
          </ul>

          <h2>6. Data Deletion</h2>
          <p>
            You can delete your account and all associated data at any time through the app&apos;s Profile screen. Account deletion permanently removes all your journal entries, chat sessions, health logs, focus sessions, meditation sessions, insights, and profile data from our servers.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            MindWeave is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@nuancetech.app">support@nuancetech.app</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
