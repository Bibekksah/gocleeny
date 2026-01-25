import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Sparkles, Clock, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicewe.webp"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/50 z-10" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-4">
            Exceptional Standards. Zero Compromise.
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6">
            Bespoke Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
            Tailored eco-friendly solutions designed to meet the unique demands of your lifestyle and business.
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900">
              The Go Cleeny Standard
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We don't just clean; we restore balance. Every service is executed with precision, using only the finest eco-friendly products to ensure a safe, pristine environment for you and your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Service Block Component */}
      {[
        {
          id: "home",
          icon: Leaf,
          title: "Home Cleaning",
          desc: "Our signature home cleaning service is a symphony of efficiency and care. tailored to transform your living space into a sanctuary of cleanliness.",
          features: ["Thorough sanitization of all living areas", "Dusting, vacuuming, and mopping with precision", "Kitchen and bathroom deep detailing", "Pet and child-safe eco-friendly formulas"],
          price: "From £16/hr",
          subPrice: "20% off for first-time customers",
          image: "/home3.webp",
          reverse: false,
          bgColor: "bg-gray-50"
        },
        {
          id: "office",
          icon: Building,
          title: "Office Cleaning",
          desc: "Elevate your professional image with a workspace that radiates excellence. A clean office isn't just about hygiene; it's about productivity and prestige.",
          features: ["Comprehensive workstation and common area maintenance", "High-touch surface sterilization", "Restroom and kitchen sanitization", "Discreet scheduling for minimal disruption"],
          price: "Custom Proposal",
          subPrice: "Based on office size and frequency",
          image: "/office.webp",
          reverse: true,
          bgColor: "bg-white"
        },
        {
          id: "commercial",
          icon: Building, // Reusing Building icon for Commercial
          title: "Commercial Cleaning",
          desc: "From boutiques to corporate headquarters, our commercial cleaning solutions are scalable and rigorous, ensuring your business always puts its best foot forward.",
          features: ["Full-scale facility maintenance", "Specialized floor care (stripping, waxing)", "Industrial-grade restroom sanitization", "Bespoke schedules aligned with operations"],
          price: "Custom Proposal",
          subPrice: "Based on facility specifications",
          image: "/commercial_cleaning.webp",
          reverse: false,
          bgColor: "bg-gray-50"
        },
        {
          id: "deep",
          icon: Sparkles,
          title: "Deep Cleaning",
          desc: "A restorative treatment for your property. Our deep cleaning service reaches the unseen corners, revitalizing your space from the inside out.",
          features: ["Intensive scrubbing of hidden areas", "Detailed appliance and fixture restoration", "Grout and tile revitalization", "Complete removal of buildup and grime"],
          price: "Custom Quote",
          subPrice: "Based on property condition",
          image: "/deep_cleaning.webp",
          reverse: true,
          bgColor: "bg-white"
        },
        {
          id: "tenancy",
          icon: Clock,
          title: "End of Tenancy",
          desc: "Ensure a seamless transition with our meticulous end-of-tenancy cleaning. We deliver deposit-securing standards that leave landlords and tenants equally impressed.",
          features: ["wall-to-wall deep clean", "Professional oven and appliance detailing", "Carpet and upholstery refreshment", "Internal window and frame polishing"],
          price: "Custom Quote",
          subPrice: " Guaranteed satisfaction standards",
          image: "/endof.webp",
          reverse: false,
          bgColor: "bg-gray-50"
        },
        {
          id: "airbnb",
          icon: Sparkles,
          title: "Airbnb & Holiday Let",
          desc: "First impressions are everything. Our turnover service ensures your rental property is 5-star ready for every guest arrival.",
          features: ["Rapid, thorough turnover cleaning", "Hotel-quality linen and towel service", "Guest essential restocking", "Flexible synchronization with booking calendars"],
          price: "Custom Quote",
          subPrice: "Tailored to your hosting needs",
          image: "/holeday.webp",
          reverse: true,
          bgColor: "bg-white"
        }
      ].map((service) => (
        <section key={service.id} id={service.id} className={`py-24 ${service.bgColor}`}>
          <div className="container px-4 md:px-6">
            <div className={`grid gap-16 md:grid-cols-2 items-center ${service.reverse ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-8 ${service.reverse ? 'md:col-start-2' : ''}`}>
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-heading font-bold tracking-tight text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {service.desc}
                </p>
                <div className="space-y-4 pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary group-hover:text-white" />
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-200/60">
                  <p className="text-2xl font-bold text-primary font-heading">{service.price}</p>
                  <p className="text-gray-500 font-medium">{service.subPrice}</p>
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 shadow-md hover:translate-y-[-2px] transition-all">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request This Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ${service.reverse ? 'md:col-start-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary">

        <div className="container px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white tracking-tight">Ready for Excellence?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Book your eco-friendly cleaning service today and experience the difference.
          </p>
        </div>
      </section>
    </main>
  )
}

