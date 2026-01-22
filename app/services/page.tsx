import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Sparkles, Clock, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicewe.webp"
            alt="Our Services"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Services</h1>
          <p className="text-xl text-white/90 max-w-[800px] mt-4">
            Professional eco-friendly cleaning services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Eco-Friendly Cleaning Solutions</h2>
            <p className="text-gray-600 mt-4 max-w-[800px] mx-auto">
              At Go Cleeny, we offer a comprehensive range of cleaning services using only eco-friendly products and
              sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Home Cleaning */}
      <section id="home" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Home Cleaning</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md">
                Our regular home cleaning service ensures your living space remains spotless, healthy, and eco-friendly.
                Our trained professionals use non-toxic products that are safe for your family, pets, and the
                environment.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Thorough cleaning of all rooms and living spaces</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Dusting, vacuuming, and mopping of all surfaces</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Kitchen and bathroom deep cleaning</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Eco-friendly products that are safe for children and pets</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-primary">From £16/hr</p>
                <p className="text-primary font-medium">20% off for first-time customers</p>
              </div>
              {/*               <Button className="mt-4 bg-blue-600 hover:bg-primary/90 text-white">
                <Link href="/booking" className="flex items-center gap-2">
                  Book Home Cleaning <ArrowRight className="h-4 w-4" />
                </Link>
              </Button> */}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/home3.webp"
                alt="Home cleaning service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Cleaning */}
      <section id="office" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden md:order-first lg:order-last">
              <Image
                src="/office.webp"
                alt="Office cleaning service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Office Cleaning</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md">
                Create a clean, healthy workspace for your team with our professional office cleaning services. We
                understand that a clean office environment boosts productivity and makes a positive impression on
                clients.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Cleaning of workstations, meeting rooms, and common areas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Sanitization of high-touch surfaces</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Kitchen and bathroom cleaning</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Flexible scheduling to minimize disruption</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-black-600">Custom Quote</p>
                <p className="text-primary">Based on office size and cleaning frequency</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning */}
      <section id="commercial" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Commercial Cleaning</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md">
                Comprehensive commercial cleaning solutions for businesses of all sizes. From retail spaces to
                corporate offices, we provide professional cleaning services that maintain a pristine environment
                for your employees and customers.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Full facility cleaning and maintenance</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Floor care including stripping and waxing</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Restroom sanitization and restocking</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Customized cleaning schedules to fit your business</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-black-600">Custom Quote</p>
                <p className="text-primary">Based on facility size and specific requirements</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/commercial_cleaning.webp"
                alt="Commercial cleaning service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Cleaning */}
      <section id="deep" className="py-16 bg-white">

        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Deep Cleaning</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md">
                Our comprehensive deep cleaning service goes beyond regular cleaning to tackle dirt, grime, and buildup
                in every corner of your space. Perfect for seasonal refreshes or when your property needs extra attention.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Intensive cleaning of all surfaces and hidden areas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Detailed kitchen and bathroom sanitization</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Cleaning of appliances, cabinets, and fixtures</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Eco-friendly products for a thorough, safe clean</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-black-600">Custom Quote</p>
                <p className="text-primary">Based on property size and cleaning requirements</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/deep_cleaning.webp"
                alt="Deep cleaning service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* End of Tenancy Cleaning */}
      <section id="tenancy" className="py-16 bg-white">

        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">End of Tenancy Cleaning</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md">
                Moving in or out of a property? Our thorough end of tenancy cleaning service helps ensure you get your
                deposit back or start your tenancy in a pristine environment.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Deep cleaning of all rooms and spaces</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Oven and appliance cleaning</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Carpet and upholstery cleaning</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Window and blind cleaning</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-black-600">Custom Quote</p>
                <p className="text-primary">Based on property size and condition</p>
              </div>
              {/*               <Button className="mt-4 bg-blue-600 hover:bg-primary/90 text-white">
                <Link href="/booking" className="flex items-center gap-2">
                  Book End of Tenancy Cleaning <ArrowRight className="h-4 w-4" />
                </Link>
              </Button> */}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/endof.webp"
                alt="End of tenancy cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Airbnb & Holiday Let Cleaning */}
      <section id="airbnb" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden md:order-first lg:order-last">
              <Image
                src="/holeday.webp"
                alt="Airbnb cleaning service"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Airbnb & Holiday Let Cleaning</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md">
                Maintain excellent reviews and happy guests with our specialized cleaning service for Airbnb and holiday
                rentals. We ensure your property is spotless and welcoming for every new guest.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Thorough cleaning between guest stays</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Fresh linens and towels service available</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Restocking of essentials</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black-600 mt-1 flex-shrink-0" />
                  <p>Flexible scheduling to fit between bookings</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold text-black-600">Custom Quote</p>
                <p className="text-primary">Based on property size and services required</p>
              </div>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Eco-Friendly Cleaning?</h2>
          <p className="text-xl mb-8 max-w-[800px] mx-auto">
            Book your service today and enjoy a cleaner, greener space with Go Cleeny.
          </p>
          {/*           <Button size="lg" variant="outline" className="bg-white text-violet-600 hover:bg-gray-100">
            <Link href="/booking" className="flex items-center gap-2">
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button> */}
        </div>
      </section>
    </main>
  )
}

