"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Leaf, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home2.webp"
            alt="Clean home environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/60 z-10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide">
            Eco-Friendly. Professional. Pristine.
          </div>
          <h1 className="heading-hero font-heading font-bold text-white tracking-tight leading-tight">
            Elevate Your Home with <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">Pure, Eco-Friendly Cleaning</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed font-light px-4">
            Experience the luxury of a meticulously cleaned home, achieved with 100% eco-friendly products that protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-full shadow-premium hover:shadow-premium-hover transition-all duration-300 w-full sm:w-auto" asChild>
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-full backdrop-blur-md transition-all duration-300 w-full sm:w-auto" asChild>
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent opacity-50" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-primary font-bold tracking-wider uppercase text-sm border-b-2 border-primary pb-1">Our Philosophy</span>
              </div>
              <h2 className="heading-section font-heading font-bold tracking-tight text-gray-900 leading-tight">
                Refining the Art of <br className="hidden sm:block" /> Sustainable Cleaning
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
                At Go Cleeny, we don't just clean; we curate healthy living environments. We believe true luxury lies in the harmony between a spotless home and a preserved planet. Our bespoke eco-friendly approach ensures your sanctuary remains chemical-free and vibrantly clean.
              </p>
              <div className="space-y-6 pt-4">
                {[
                  "100% Non-toxic, biodegradable products",
                  "Vetted cleaning specialists trained in detail",
                  "Tailored scheduling designed for your lifestyle"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <p className="text-lg font-medium text-gray-800">{item}</p>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 shadow-lg hover:translate-y-[-2px] transition-all">
                <Link href="/about" className="flex items-center gap-2">
                  Discover Our Story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-700 ease-out">
              <Image
                src="/home.webp"
                alt="Eco-friendly cleaning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                <p className="font-heading text-2xl font-bold text-white mb-1">Trusted by 500+ Homes</p>
                <p className="text-gray-200 font-medium">Delivering excellence across Bolton and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="heading-section font-heading font-bold tracking-tight mb-6">Curated Cleaning Services</h2>
            <p className="text-xl text-gray-600">
              Bespoke solutions compliant with the highest standards of hygiene and sustainability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building,
                title: "HMO Cleaning",
                desc: "Expert cleaning for shared homes and multi-occupancy living.",
                price: "From £16/hr",
                offer: "20% off first visit"
              },
              {
                icon: Building, // Changed from Sparkles to Building for office 
                title: "Office Cleaning",
                desc: "Elevating professional workspaces for success.",
                price: "Custom Proposal",
              },
              {
                icon: Clock,
                title: "End of Tenancy",
                desc: "Rigorous detailing for seamless transitions.",
                price: "Custom Quote",
              },
              {
                icon: Sparkles,
                title: "Airbnb & Holiday Let",
                desc: "Five-star standard preparation for every guest.",
                price: "Custom Quote",
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className="h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 font-heading">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <p className="text-primary font-bold text-lg">{service.price}</p>
                  {service.offer && <p className="text-sm text-green-600 font-medium mt-1">{service.offer}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 shadow-lg text-lg">
              <Link href="/services" className="flex items-center gap-2">
                See Prices & Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">

          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h2 className="heading-section font-heading font-bold mb-6 text-white tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Join the movement towards a cleaner home and a greener future. Book your premium eco-friendly service today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 h-14 rounded-full shadow-2xl">
              <Link href="/contact" className="flex items-center gap-2">
                Book Now <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
import { Building } from "lucide-react"

