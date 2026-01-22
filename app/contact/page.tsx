"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Office = "HEAD" | "BRANCH";

const OFFICE_INFO = {
  HEAD: {
    name: "Head Office",
    email: "gocleeny@gmail.com",
    phone: "+44 7350 479620",
    location: "Bolton, United Kingdom",
    area: "Serving the Greater London area",
  },
  BRANCH: {
    name: "Branch Office",
    email: "gloucester.gocleeny@gmail.com",
    phone: "+44 7585 731854",
    location: "Gloucester, United Kingdom",
    area: "Serving the Gloucester area",
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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct Gmail URL
      const subject = encodeURIComponent(`New Contact Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${currentOffice.email}&su=${subject}&body=${body}`;

      // Open Gmail in a new tab
      window.open(gmailUrl, "_blank");

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error opening Gmail:", error);
      setErrors({ form: "There was an error opening your email client. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-[800px] mt-4">
            Get in touch with our team for any inquiries or to schedule a service
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          {/* Office Toggle Buttons - Centered */}
          <p className="text-center text-gray-500 mb-4">click each button to see details</p>
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveOffice("HEAD")}
              variant={activeOffice === "HEAD" ? "default" : "outline"}
              className={activeOffice === "HEAD" ? "bg-primary text-white min-w-[140px]" : "min-w-[140px]"}
            >
              Head Office
            </Button>
            <Button
              onClick={() => setActiveOffice("BRANCH")}
              variant={activeOffice === "BRANCH" ? "default" : "outline"}
              className={activeOffice === "BRANCH" ? "bg-primary text-white min-w-[140px]" : "min-w-[140px]"}
            >
              Branch Office
            </Button>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
              <p className="text-gray-600 mt-4 text-justify max-w-md mb-8">
                Have questions about our services or want to schedule a cleaning? Toggle between our offices and fill out
                the form or contact us directly using the information below.
              </p>



              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-navy blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">{currentOffice.email}</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-navy blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">{currentOffice.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-navy blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">{currentOffice.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{currentOffice.area}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message ({currentOffice.name})</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible via Gmail
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                      </div>
                    </div>

                    {errors.form && (
                      <div className="bg-red-50 p-4 rounded-md">
                        <p className="text-sm text-red-500">{errors.form}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Opening Gmail..." : "Send Message via Gmail"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
