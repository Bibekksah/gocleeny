"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Upload, Briefcase, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
      if (errors.resume) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors.resume
          return newErrors
        })
      }
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
    if (!formData.position) newErrors.position = "Please select a position"
    if (!formData.experience) newErrors.experience = "Please select your experience level"
    // Resume check optional for now or can be enabled
    // if (!formData.resume) newErrors.resume = "Please upload your resume"

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
        position: "",
        experience: "",
        message: "",
        resume: null,
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors({ form: "There was an error submitting your application. Please try again." })
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
            src="/careers.webp"
            alt="Careers at Go Cleeny"
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
            Join Our Team
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6">
            Build a Career with Purpose
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
            Be part of the eco-friendly cleaning revolution. We value passion, precision, and people.
          </p>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Go Cleeny?</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900 mb-6">
              More Than Just a Job
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe in treating our team with the same care we treat our clients' homes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Star,
                title: "Competitive Pay",
                desc: "We offer above-market rates, performance bonuses, and regular salary reviews."
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                desc: "Work-life balance matters. We offer flexible shifts to suit your lifestyle."
              },
              {
                icon: Briefcase,
                title: "Career Growth",
                desc: "Clear pathways for advancement into leadership and specialized roles."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900">Current Openings</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Ready to make a difference? Explore our available positions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cleaning Specialist",
                type: "Full-time / Part-time",
                desc: "Deliver exceptional eco-friendly cleaning services to our residential clients.",
                requirements: ["Experience preferred", "Attention to detail", "Reliable transportation"]
              },
              {
                title: "Team Lead",
                type: "Full-time",
                desc: "Lead and mentor a team of specialists to ensure service excellence.",
                requirements: ["2+ years experience", "Leadership skills", "Problem-solving ability"]
              },
              {
                title: "Customer Service Rep",
                type: "Full-time / Remote",
                desc: "Manage client relationships and coordinate schedules efficiently.",
                requirements: ["Customer service exp.", "Great communication", "Tech savvy"]
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-premium-hover transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2 font-heading text-gray-900">{job.title}</h3>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 self-start">
                  {job.type}
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{job.desc}</p>
                <ul className="space-y-3 mb-8">
                  {job.requirements.map((req, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700 group">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-primary group-hover:text-white" />
                      </div>
                      {req}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-colors rounded-full h-12 shadow-md hover:translate-y-[-2px] transition-all">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
