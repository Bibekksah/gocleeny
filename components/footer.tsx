import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

      <div className="container relative z-10 px-4 md:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 group justify-center sm:justify-start">
              <div className="glass p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <Image src="/logo.png" alt="Go Cleeny Logo" width={48} height={48} className="object-contain" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white font-heading tracking-tight">Go Cleeny</span>
            </Link>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Elevating hygiene standards with a conscience. Eco-friendly cleaning for homes and businesses that value the future.
            </p>
            <div className="flex gap-3 pt-2 justify-center sm:justify-start">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1DUpsW2TnA/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/gocleeny_uk?igsh=MTcxazFoaWNuM3c5dg==", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/go-cleeny/about/?viewAsMember=true", label: "LinkedIn" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 group touch-target"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
              <Link
                href="https://www.tiktok.com/@go.cleeny.uk?_r=1&_t=ZN-93EiLV3jmwY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 group touch-target"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-heading mb-3 sm:mb-4 border-l-4 border-green-400 pl-3 inline-block sm:block">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact Us"].map((item) => {
                const href = item === "Home" ? "/" : item === "About Us" ? "/about" : item === "Contact Us" ? "/contact" : "/services";
                return (
                  <li key={item}>
                    <Link href={href} className="text-sm sm:text-base text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block touch-target">
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-heading mb-3 sm:mb-4 border-l-4 border-green-400 pl-3 inline-block sm:block">Our Expertise</h3>
            <ul className="space-y-2">
              {[
                { label: "Home Cleaning", href: "/services#home" },
                { label: "Office Cleaning", href: "/services#office" },
                { label: "Commercial Cleaning", href: "/services#commercial" },
                { label: "Deep Cleaning", href: "/services#deep" },
                { label: "End of Tenancy", href: "/services#tenancy" },
                { label: "Airbnb & Holiday Let", href: "/services#airbnb" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-sm sm:text-base text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block touch-target">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-heading mb-3 sm:mb-4 border-l-4 border-green-400 pl-3 inline-block sm:block">Get in Touch</h3>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 space-y-3">
              <div>
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1.5">Email Us</h4>
                <Link href="mailto:gocleeny@gmail.com" className="flex items-center gap-3 text-sm sm:text-base text-white hover:text-green-300 transition-colors group justify-center sm:justify-start">
                  <Mail className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="break-all">gocleeny@gmail.com</span>
                </Link>
              </div>
              <div>
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1.5">Call Us</h4>
                <Link href="tel:+447350479620" className="flex items-center gap-3 text-sm sm:text-base text-white hover:text-green-300 transition-colors group justify-center sm:justify-start">
                  <Phone className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>+44 7350479620</span>
                </Link>
              </div>
              <div>
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1.5">Location</h4>
                <div className="flex items-center gap-3 text-sm sm:text-base text-white group justify-center sm:justify-start">
                  <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Bolton, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center text-center md:text-left">
            <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Go Cleeny. All rights reserved.</p>
            <p className="text-white/50 text-sm flex items-center gap-1">Created by <span className="text-white font-medium">Intrepid Foundation</span></p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors hover:underline decoration-green-400 underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors hover:underline decoration-green-400 underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
