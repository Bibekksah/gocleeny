"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Headphones, Ticket, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Office = "HEAD" | "BRANCH";

const OFFICE_INFO = {
  HEAD: {
    name: "Head Office",
    email: "gocleeny@gmail.com",
    phone: "+44 7350 479620",
    location: "Bolton, United Kingdom",
    area: "Serving the Greater London area",
    mapQuery: "Bolton, UK"
  },
  BRANCH: {
    name: "Branch Office",
    email: "gloucestershire.gocleeny@gmail.com",
    phone: "+44 7349 428794",
    location: "Gloucester, United Kingdom",
    area: "Serving the Gloucester area",
    mapQuery: "Gloucester, UK"
  },
};

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState<Office>("HEAD");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentOffice = OFFICE_INFO[activeOffice];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(`New Contact Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${currentOffice.email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error opening Gmail:", error);
      setErrors({ form: "There was an error opening your email client. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] sm:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/60 z-10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl font-light">
            We'd love to hear from you. Reach out today to discuss your cleaning needs.
          </p>
        </motion.div>
      </section>

      {/* Office Selector & Layout Container */}
      <section className="py-16 md:py-24 relative z-20 -mt-20">
        <div className="container px-4 md:px-6">

          {/* Office Toggle - Centered above content */}
          <div className="flex justify-center mb-12">
            <div className="flex p-1 bg-white rounded-full shadow-lg border border-gray-100 max-w-full overflow-hidden">
              {["HEAD", "BRANCH"].map((office) => (
                <button
                  key={office}
                  onClick={() => setActiveOffice(office as Office)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeOffice === office
                    ? "bg-primary text-white shadow-md transform scale-105"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {office === "HEAD" ? "Head Office" : "Branch Office"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form - Left Side (or Top on mobile) */}
            <div className="lg:col-span-8 lg:col-start-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="grid md:grid-cols-5 h-full">
                  {/* Form Side */}
                  <div className="md:col-span-3 p-6 sm:p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900">Send us a Message</h2>
                      <p className="text-gray-500 mt-2">Connecting with {currentOffice.name}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium ml-1">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className={`h-12 rounded-xl bg-gray-50 border-gray-200 mt-1 focus:bg-white transition-all ${errors.name ? "border-red-500" : ""}`}
                          />
                          {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email" className="text-gray-700 font-medium ml-1">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className={`h-12 rounded-xl bg-gray-50 border-gray-200 mt-1 focus:bg-white transition-all ${errors.email ? "border-red-500" : ""}`}
                            />
                            {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email}</p>}
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-gray-700 font-medium ml-1">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+44 7000..."
                              value={formData.phone}
                              onChange={handleChange}
                              className={`h-12 rounded-xl bg-gray-50 border-gray-200 mt-1 focus:bg-white transition-all ${errors.phone ? "border-red-500" : ""}`}
                            />
                            {errors.phone && <p className="text-xs text-red-500 mt-1 ml-1">{errors.phone}</p>}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-gray-700 font-medium ml-1">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help?"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`rounded-xl bg-gray-50 border-gray-200 mt-1 focus:bg-white transition-all resize-none ${errors.message ? "border-red-500" : ""}`}
                          />
                          {errors.message && <p className="text-xs text-red-500 mt-1 ml-1">{errors.message}</p>}
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>

                  {/* Info Side (Dark) */}
                  <div className="md:col-span-2 bg-gray-900 p-6 sm:p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10 space-y-8">
                      <div>
                        <h3 className="text-xl font-bold font-heading mb-6 border-b border-white/10 pb-4">Contact Info</h3>
                        <div className="space-y-6">
                          <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                              <Phone className="h-5 w-5 text-green-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                              <p className="text-white/50 text-xs uppercase tracking-wider font-bold mb-1">Phone</p>
                              <p className="text-lg font-medium">{currentOffice.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                              <Mail className="h-5 w-5 text-green-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                              <p className="text-white/50 text-xs uppercase tracking-wider font-bold mb-1">Email</p>
                              <p className="text-lg font-medium break-all">{currentOffice.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                              <MapPin className="h-5 w-5 text-green-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                              <p className="text-white/50 text-xs uppercase tracking-wider font-bold mb-1">Location</p>
                              <p className="text-lg font-medium">{currentOffice.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-12">
                      <h4 className="font-bold mb-4">Follow Us</h4>
                      <div className="flex gap-3">
                        <a href="https://www.facebook.com/share/1DUpsW2TnA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/gocleeny_uk?igsh=MTcxazFoaWNuM3c5dg==" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/go-cleeny/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://www.tiktok.com/@go.cleeny.uk?_r=1&_t=ZN-93EiLV3jmwY" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Help Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 text-center text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mx-auto h-16 w-16 mb-6">
                <Headphones className="h-full w-full opacity-80" strokeWidth={1} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">Help Center</h3>
              <p className="text-xl font-medium mb-3">{currentOffice.phone}</p>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                {currentOffice.email}
              </p>
            </motion.div>

            {/* Card 2: Support Ticket */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-2xl p-8 text-center text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mx-auto h-16 w-16 mb-6">
                <Ticket className="h-full w-full opacity-80" strokeWidth={1} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">Support Ticket</h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto">
                Send a ticket to us and inform if there are any trouble with our Services
              </p>
            </motion.div>

            {/* Card 3: Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 text-center text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mx-auto h-16 w-16 mb-6">
                <MessageSquare className="h-full w-full opacity-80" strokeWidth={1} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">Questions?</h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto">
                Fill out the form above or email us suggestions and we will contact you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Map Section */}
      <section className="w-full h-[350px] sm:h-[450px] relative bg-gray-200">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.3)" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        ></iframe>

        {/* Newsletter Bar - Overlapping Map */}

      </section>

      {/* Vertical spacer for newsletter overlap */}


    </main>
  );
}
