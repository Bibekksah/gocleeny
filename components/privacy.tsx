import Head from "next/head"

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Go Cleeny</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-gray-800 mt-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Privacy Policy</h1>
        <p><strong>Effective Date:</strong> 20th March 2025</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">1. Introduction</h2>
        <p>
          Welcome to Go Cleeny Limited ("we", "our", or "us"). Your privacy is important to us.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website <a href="https://www.gocleeny.com" className="text-blue-600 underline" target="_blank">www.gocleeny.com</a>,
          use our services, or contact us.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">2. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Personal Information:</strong> Name, address, phone, email when booking or enquiring.</li>
          <li><strong>Payment Information:</strong> Securely processed billing and transactions.</li>
          <li><strong>Technical Data:</strong> IP address, browser, cookies, and usage data.</li>
          <li><strong>Communication Data:</strong> Messages and feedback when contacting us.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide and manage cleaning services.</li>
          <li>Respond to enquiries and service requests.</li>
          <li>Process payments and invoices.</li>
          <li>Improve website functionality and experience.</li>
          <li>Send updates or service communication.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">4. Sharing Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Trusted service providers (IT, payment, etc.).</li>
          <li>Authorized staff or contractors.</li>
          <li>Legal authorities when necessary.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">5. Data Security</h2>
        <p>We apply technical and organizational safeguards to protect your data, but no online system is 100% secure.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">6. Your Data Rights</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access or delete your personal data.</li>
          <li>Request correction or restriction of use.</li>
          <li>Withdraw consent anytime.</li>
          <li>File a complaint with a data authority.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">7. Cookies</h2>
        <p>We use cookies for analytics and better user experience. You can manage cookies via browser settings.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">8. International Transfers</h2>
        <p>Data may be transferred to other countries with different protection laws. By using our services, you consent to this.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">9. Links to Other Websites</h2>
        <p>We’re not responsible for third-party websites linked from our site. Review their privacy policies before sharing data.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">10. Changes to This Policy</h2>
        <p>We may update this policy. Check this page regularly for changes. The effective date will be updated accordingly.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">11. Contact Us</h2>
        <p>
          <strong>Go Cleeny Limited</strong><br />
          Email: <a href="mailto:gocleeny@gmail.com" className="text-blue-600 underline">gocleeny@gmail.com</a>
        </p>
      </div>
    </>
  )
}
