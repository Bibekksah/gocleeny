"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, TrendingUp, Users, DollarSign, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"

export default function FranchisingPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        investment: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.location.trim()) newErrors.location = "Location is required"
        if (!formData.investment) newErrors.investment = "Investment range is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsSubmitting(true)

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            console.log("Form submitted:", formData)
            setIsSuccess(true)
            setFormData({
                name: "",
                email: "",
                phone: "",
                location: "",
                investment: "",
                message: "",
            })
        } catch (error) {
            console.error("Error submitting form:", error)
            setErrors({ form: "There was an error submitting your inquiry. Please try again." })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fran.webp"
                        alt="Go Cleeny Franchising"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/50 z-10" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-4">
                        Franchise Opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6">
                        Scale with Sustainability
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
                        Join the fastest-growing eco-friendly cleaning network and build a future-proof business.
                    </p>
                </motion.div>
            </section>

            {/* Why Franchise With Us */}
            <section className="py-24 bg-white relative">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Partner With Us</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900 mb-6">
                            A Proven Model for Success
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We provide the blueprint, brand, and backing you need to thrive in the green economy.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: TrendingUp, title: "Growing Industry", desc: "Capitalize on the surging demand for green cleaning services." },
                            { icon: Users, title: "Full Support", desc: "Comprehensive training in operations, sales, and eco-standards." },
                            { icon: DollarSign, title: "High ROI", desc: "Recurring revenue model with maximized profit margins." },
                            { icon: Award, title: "Premium Brand", desc: "Leverage Go Cleeny's reputation for excellence and trust." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="h-14 w-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <item.icon className="h-7 w-7 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise Process */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900">Your Journey to Ownership</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                            Five steps to launching your own Go Cleeny franchise.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {[
                            { title: "Initial Inquiry", desc: "Connect with our development team to discuss the opportunity." },
                            { title: "Discovery Day", desc: "Visit our HQ, meet the leadership, and see operations in action." },
                            { title: "Application & Approval", desc: "We evaluate your fit, experience, and financial capability." },
                            { title: "Training & Setup", desc: "Intensive program covering all aspects of the business." },
                            { title: "Grand Opening", desc: "Launch with a marketing blitz and on-site support." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row gap-6 items-start relative group"
                            >
                                <div className="hidden md:block absolute left-6 top-16 bottom-[-48px] w-0.5 bg-gray-200 last:hidden"></div>
                                <div className="h-12 w-12 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center flex-shrink-0 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    <span className="text-primary font-bold text-lg">{i + 1}</span>
                                </div>
                                <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <Testimonials
                title="Partner Success Stories"
                description="Hear from entrepreneurs who have built thriving businesses with Go Cleeny."
                items={[
                    {
                        name: "Sarah Jenkins",
                        role: "Franchise Partner, Leeds",
                        content: "Transitioning from a corporate job to running my own Go Cleeny franchise was the best decision I've ever made. The support from HQ is phenomenal, and clients love our eco-friendly approach.",
                        rating: 5,
                    },
                    {
                        name: "David Miller",
                        role: "Franchise Partner, Bristol",
                        content: "The brand reputation opened doors immediately. We hit our first year revenue targets in just 8 months. The systems they provide make operations seamless.",
                        rating: 5,
                    },
                    {
                        name: "Emma & Tom Richards",
                        role: "Franchise Partners, Manchester",
                        content: "We wanted a business that aligned with our values. Go Cleeny allows us to be profitable while making a positive impact on the environment. It's a win-win.",
                        rating: 5,
                    }
                ]}
            />

            {/* CTA / Investment Teaser */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary">
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                    {/* Abstract shapes */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to Start?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light">
                        Initial investments start from £25,000. Secure your territory today.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-3xl mx-auto text-left hidden">
                        {/* Hiding the detailed investment table for now, focusing on the CTA */}
                    </div>
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 h-14 rounded-full shadow-2xl">
                        <Link href="/contact">
                            View Franchise Brochure <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
