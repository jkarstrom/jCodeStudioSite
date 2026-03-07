/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Drink Diary",
  description: "Privacy Policy for Drink Diary by jCode Studio.",
};

export default function DrinkDiaryPrivacyPolicy() {
  return (
    <main className="w-full font-vietnam bg-[#F5F4F0] py-16 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm p-10 md:p-14">

        {/* Header */}
        <p className="text-xs font-bold tracking-widest uppercase text-[#687D31] mb-2">jCode Studio</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#19350C] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 pb-8 mb-8 border-b border-[#E2E0D9]">
          Drink Diary &nbsp;&middot;&nbsp; Effective Date: March 6, 2026 &nbsp;&middot;&nbsp; Last Updated: March 6, 2026
        </p>

        {/* Section 1 */}
        <Section title="1. Introduction">
          <p>Welcome to Drink Diary (&ldquo;the App&rdquo;), operated by jCode Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application.</p>
          <p>By using Drink Diary, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the App.</p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Information We Collect">
          <Subheading>Information You Provide</Subheading>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li><strong>Phone number</strong> &mdash; collected when you create an account via SMS verification (Firebase Authentication)</li>
            <li><strong>Display name and username</strong> &mdash; chosen by you during profile setup</li>
            <li><strong>Drink logs</strong> &mdash; drink name, category, location, notes, price, date/time, and temperature preference</li>
            <li><strong>Photos</strong> &mdash; images you capture or select from your photo library to attach to drink logs</li>
          </ul>
          <Subheading>Information Collected Automatically</Subheading>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
            <li><strong>Device information</strong> &mdash; device type and operating system version, collected by Firebase for authentication purposes</li>
            <li>We do <strong>not</strong> collect IP addresses, precise location data, advertising identifiers, or browsing history</li>
          </ul>
        </Section>

        {/* Section 3 */}
        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li>Create and manage your account</li>
            <li>Enable social features (finding friends by username, following friends, viewing friends&apos; drink logs)</li>
            <li>Sync your drink logs across sessions when you are signed in</li>
            <li>Respond to your questions and support requests</li>
          </ul>
          <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We do <strong>not</strong> use your data for advertising.</p>
        </Section>

        {/* Section 4 */}
        <Section title="4. Camera and Photos">
          <p>Drink Diary requests access to your device camera and photo library solely to allow you to attach photos to your drink logs. Photos are stored locally on your device and, if you are signed in, synced to secure cloud storage (Firebase Firestore) associated with your account. We do not use your photos for any other purpose.</p>
        </Section>

        {/* Section 5 */}
        <Section title="5. Third-Party Services">
          <p>We use the following third-party service to operate the App:</p>
          <p className="font-semibold text-[#19350C]">Google Firebase (Google LLC)</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li>Firebase Authentication &mdash; handles phone number verification via SMS</li>
            <li>Firebase Firestore &mdash; cloud storage for your profile, drink logs, and social data</li>
            <li>Firebase is subject to Google&apos;s Privacy Policy: <ExternalLink href="https://policies.google.com/privacy">https://policies.google.com/privacy</ExternalLink></li>
          </ul>
          <p>We do not use Google Analytics, advertising networks, or any other tracking or analytics tools.</p>
        </Section>

        {/* Section 6 */}
        <Section title="6. Data Storage and Security">
          <p>Your drink logs are stored locally on your device using encrypted storage. When you are signed in, your data is also synced to Firebase Firestore, hosted on Google Cloud infrastructure with industry-standard encryption at rest and in transit.</p>
          <p>Your phone number is used only for sign-in verification and is never exposed to other users of the App. Other users can only see your display name and username.</p>
          <p>While we take reasonable measures to protect your information, no method of transmission over the internet is 100% secure.</p>
        </Section>

        {/* Section 7 */}
        <Section title="7. Account Deletion">
          <p>You may delete your account at any time from within the App: <strong>Profile &rarr; Delete account</strong></p>
          <p>Deleting your account permanently removes:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li>Your profile (display name, username, phone number)</li>
            <li>All your drink logs from our servers</li>
            <li>Your friends/following data</li>
          </ul>
          <p>Local data stored on your device is also cleared. This action cannot be undone.</p>
        </Section>

        {/* Section 8 */}
        <Section title="8. Children's Privacy">
          <p>Drink Diary is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at <EmailLink /> and we will delete it promptly.</p>
        </Section>

        {/* Section 9 */}
        <Section title="9. California Privacy Rights (CalOPPA)">
          <p>Under the California Online Privacy Protection Act (CalOPPA), California residents have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li>Know what personal data we collect</li>
            <li>Know whether we disclose personal data to third parties</li>
            <li>Access and request deletion of their personal data</li>
            <li>Not be discriminated against for exercising their privacy rights</li>
          </ul>
          <p>We do not sell personal information. We do not track users across third-party websites. To exercise your rights, contact us at <EmailLink />.</p>
        </Section>

        {/* Section 10 */}
        <Section title="10. California Consumer Privacy Act (CCPA) and CPRA">
          <p>If you are a California resident, you have the following rights under the CCPA as amended by the CPRA:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li><strong>Right to Know</strong> &mdash; You may request information about the categories and specific pieces of personal information we have collected about you</li>
            <li><strong>Right to Delete</strong> &mdash; You may request deletion of your personal information, subject to certain exceptions</li>
            <li><strong>Right to Correct</strong> &mdash; You may request correction of inaccurate personal information</li>
            <li><strong>Right to Opt-Out</strong> &mdash; We do not sell or share personal information for cross-context behavioral advertising</li>
            <li><strong>Right to Non-Discrimination</strong> &mdash; We will not discriminate against you for exercising any of these rights</li>
          </ul>
          <p className="font-semibold text-[#19350C]">Categories of personal information collected:</p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-sm text-gray-700">
            <li>Identifiers (phone number, username)</li>
            <li>Photos and visual content</li>
            <li>User-generated content (drink logs)</li>
          </ul>
          <p><strong>Purpose of collection:</strong> App functionality and social features only.</p>
          <p>To submit a CCPA/CPRA request, contact us at <EmailLink />. We will respond within 45 days.</p>
        </Section>

        {/* Section 11 */}
        <Section title="11. Changes to This Privacy Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.</p>
        </Section>

        {/* Section 12 */}
        <Section title="12. Contact Us">
          <p>If you have any questions about this Privacy Policy, your data, or your rights, please contact us:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
            <li><strong>jCode Studio</strong></li>
            <li>Website: <ExternalLink href="https://www.jcodestudio.com/apps/drink-diary">https://www.jcodestudio.com/apps/drink-diary</ExternalLink></li>
            <li>Email: <EmailLink /></li>
          </ul>
        </Section>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-[#E2E0D9] text-center text-xs text-gray-400">
          &copy; 2026 jCode Studio &nbsp;&middot;&nbsp;{" "}
          <Link href="/apps/drink-diary" className="text-[#687D31] hover:underline">
            Drink Diary
          </Link>
        </div>

      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-[#19350C] mb-3 mt-8">{title}</h2>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Subheading({ children }) {
  return <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">{children}</h3>;
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#687D31] hover:underline break-all">
      {children}
    </a>
  );
}

function EmailLink() {
  return (
    <a href="mailto:joan@jcodestudio.com" className="text-[#687D31] hover:underline">
      joan@jcodestudio.com
    </a>
  );
}
