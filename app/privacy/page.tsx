import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Go Cleeny",
    description: "Privacy Policy for Go Cleeny Cleaning Services",
}

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10 border border-gray-100">
                <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
                <p className="mb-4 text-gray-600"><strong>Effective Date:</strong> 20th March 2025</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">1. Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to Go Cleeny Limited ("we", "our", or "us"). Your privacy is important to us.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your
                        information when you visit our website <a href="https://www.gocleeny.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.gocleeny.com</a>,
                        use our services, or contact us.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">2. Information We Collect</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Personal Information:</strong> Name, address, phone, email when booking or enquiring.</li>
                        <li><strong>Payment Information:</strong> Securely processed billing and transactions.</li>
                        <li><strong>Technical Data:</strong> IP address, browser, cookies, and usage data.</li>
                        <li><strong>Communication Data:</strong> Messages and feedback when contacting us.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Provide and manage cleaning services.</li>
                        <li>Respond to enquiries and service requests.</li>
                        <li>Process payments and invoices.</li>
                        <li>Improve website functionality and experience.</li>
                        <li>Send updates or service communication.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">4. Sharing Your Information</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Trusted service providers (IT, payment, etc.).</li>
                        <li>Authorized staff or contractors.</li>
                        <li>Legal authorities when necessary.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">5. Data Security</h2>
                    <p className="text-gray-700 leading-relaxed">We apply technical and organizational safeguards to protect your data, but no online system is 100% secure.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">6. Your Data Rights</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Access or delete your personal data.</li>
                        <li>Request correction or restriction of use.</li>
                        <li>Withdraw consent anytime.</li>
                        <li>File a complaint with a data authority.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">7. Cookies</h2>
                    <p className="text-gray-700 leading-relaxed">We use cookies for analytics and better user experience. You can manage cookies via browser settings.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">8. International Transfers</h2>
                    <p className="text-gray-700 leading-relaxed">Data may be transferred to other countries with different protection laws. By using our services, you consent to this.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">9. Links to Other Websites</h2>
                    <p className="text-gray-700 leading-relaxed">We’re not responsible for third-party websites linked from our site. Review their privacy policies before sharing data.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">10. Changes to This Policy</h2>
                    <p className="text-gray-700 leading-relaxed">We may update this policy. Check this page regularly for changes. The effective date will be updated accordingly.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 text-primary">11. Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Go Cleeny Limited</strong><br />
                        Email: <a href="mailto:gocleeny@gmail.com" className="text-primary hover:underline">gocleeny@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    )
}
