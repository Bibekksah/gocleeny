import Image from "next/image"
import { Leaf, Recycle, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.webp"
            alt="About Go Cleeny"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/60 z-10" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-4">
            Our Purpose & Promise
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6">The Go Cleeny Story</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
            Redefining cleaning through the lens of sustainability and unconditional quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl md:order-last transform rotate-1 hover:rotate-0 transition-all duration-700">
              <Image src="/our story.webp" alt="Our story" fill className="object-cover hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 mix-blend-multiply" />
            </div>
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-wider uppercase text-sm border-b-2 border-primary pb-1">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-gray-900 leading-tight">
                Founded on <br /> Principles of Purity
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  Go Cleeny was born from a singular, powerful ambition: to deliver uncompromising cleaning standards without the environmental toll. We saw an industry reliant on harsh chemicals and chose a different path—one where efficacy complements ecology.
                </p>
                <p>
                  From day one, our mandate has been strict: 100% eco-friendly, non-toxic products that safeguard your home, your family, and our shared future. Our cleaning specialists aren't just staff; they are dedicated advocates of healthier living.
                </p>
                <p>
                  As part of the prestigious <span className="text-primary font-semibold">SAMBIC Group</span>, we marry local care with world-class operational excellence, constantly innovating to bring you the finest sustainable cleaning services in the UK.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-3xl font-bold text-primary font-heading">98%</div>
                    <div className="text-sm text-gray-500 font-medium">Customer Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary font-heading">100%</div>
                    <div className="text-sm text-gray-500 font-medium">Eco-Certified Products</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary font-heading">500+</div>
                    <div className="text-sm text-gray-500 font-medium">Happy Homes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Core Beliefs</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-gray-900 mb-6 font-heading">The Pillars of Our Service</h2>
            <p className="text-xl text-gray-600">
              The fundamental principles that drive every decision and detail at Go Cleeny.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Leaf, title: "Sustainability", desc: "Eco-first in every product and process." },
              { icon: Heart, title: "Wellness", desc: "Creating healthy environments for peace of mind." },
              { icon: Users, title: "Integrity", desc: "Transparent, honest, and reliable partnerships." },
              { icon: Recycle, title: "Innovation", desc: "Constantly advancing our green technologies." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-premium-hover transition-all duration-300 border border-gray-100 group">
                <div className="h-14 w-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMBIC Group Affiliation */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="bg-primary/5 p-12 lg:p-16 rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900">Proudly Part of the SAMBIC Group</h2>
                <div className="w-20 h-1 bg-primary mx-auto lg:mx-0 rounded-full" />
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  Our affiliation with the SAMBIC Group empowers us with resources, shared expertise, and a network of excellence. This partnership ensures that Go Cleeny operates at the forefront of the industry, delivering standards that are second to none across the UK.
                </p>
              </div>
              <div className="flex-shrink-0 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="relative h-[120px] w-[240px]">
                  <Image
                    src="/logo.png"
                    alt="SAMBIC Group logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

