import Link from "next/link"

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 container px-4 md:px-6 py-12 md:py-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 border-b pb-4">
                            Terms and Services
                        </h1>
                        <p className="text-gray-500 text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            By accessing and using the services provided by Go Cleeny ("we," "us," or "our"), you agree to comply with
                            and be bound by these Terms and Services. If you do not agree to these terms, please do not use our
                            services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">2. Services Description</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Go Cleeny provides eco-friendly cleaning services including, but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>Residential Home Cleaning</li>
                            <li>Office and Commercial Cleaning</li>
                            <li>Deep Cleaning Services</li>
                            <li>End of Tenancy Cleaning</li>
                            <li>Airbnb and Holiday Let Management</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            We strive to use environmentally friendly products and methods wherever possible to ensure the safety of
                            your space and the planet.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">3. Bookings and Cancellations</h2>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>Booking:</strong> Services can be booked via our website, email, or phone. A booking is confirmed
                            only when you receive a confirmation from us.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>Cancellation:</strong> We understand that schedules change. Please provide at least 24 hours'
                            notice for cancellations or rescheduling. Cancellations made with less than 24 hours' notice may be
                            subject to a cancellation fee.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">4. Pricing and Payment</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Prices for our services are described on our website or provided via a custom quote. We reserve the right
                            to adjust pricing with notice. Payment terms will be specified at the time of booking.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">5. Customer Responsibilities</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To ensure the best possible service, please ensure that:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>Your property is accessible at the scheduled time.</li>
                            <li>You inform us of any specific instructions or hazards.</li>
                            <li>Valuable or fragile items are secured or pointed out to our team.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">6. Liability and Insurance</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Go Cleeny is fully insured. While we take the utmost care in providing our services, we limit our
                            liability for damage to the cost of repair or replacement of the damaged item, subject to verification. We
                            are not liable for pre-existing damage or damage resulting from faulty equipment or fixtures in your
                            property.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">7. Eco-Friendly Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are committed to sustainability. Our cleaning solutions are selected to be biodegradable, non-toxic, and
                            safe for pets and children. By using our services, you support our mission to reduce the environmental
                            impact of cleaning.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">8. Changes to Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update these Terms and Services from time to time. The latest version will always be available on
                            this page. Your continued use of our services constitutes acceptance of any changes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                            <p className="text-gray-700"><strong>Email:</strong> gocleeny@gmail.com</p>
                            <p className="text-gray-700"><strong>Phone:</strong> +44 7350479620</p>
                            <p className="text-gray-700"><strong>Address:</strong> Bolton, UK</p>
                        </div>
                    </section>
                </div>
                <div className="mt-12 text-center">
                    <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                        &larr; Back to Home
                    </Link>
                </div>
            </main>
        </div>
    )
}
