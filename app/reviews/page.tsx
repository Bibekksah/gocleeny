"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle, Heart, Award, ThumbsUp, ExternalLink, Loader2, Send, X, MessageSquarePlus } from "lucide-react"

interface Review {
    id: number
    name: string
    rating: number
    date: string
    content: string
    title: string
    location: string
    verified: boolean
    source?: 'checkatrade' | 'user'
}

interface CheckatradeData {
    businessName: string
    averageRating: number
    totalReviews: number
    reviews: Review[]
    lastUpdated: string
}

// Fallback static reviews in case API fails
const fallbackReviews: Review[] = [
    { id: 1, name: "Chitta J", rating: 9.67, date: "21 Jan 2026", title: "Reliable service", content: "Bhupan was great. If you need a pair of reliable hand Bhupan is great.", location: "GL2", verified: true },
    { id: 2, name: "Ayo", rating: 10, date: "28 Nov 2025", title: "Dedicated and professional", content: "Very professional, prompt and intentional - highly recommend.", location: "BB12", verified: true },
    { id: 3, name: "Anonymous", rating: 10, date: "24 Nov 2025", title: "Best Cleaning company", content: "Best Cleaning company in the town I've ever had. I highly recommend Go Cleeny as they did an excellent job in a very short notice.", location: "M4", verified: true },
    { id: 4, name: "Kate P", rating: 10, date: "13 Sep 2025", title: "Great cleaners", content: "Arrived promptly and were prepared with various cleaning chemicals. Everything clean and sparkling.", location: "BL6", verified: true },
    { id: 5, name: "Michelle N", rating: 10, date: "20 Aug 2025", title: "Outstanding service", content: "Bickey went out of his way to help me. Extremely polite and reasonable rates.", location: "BL1", verified: true },
    { id: 6, name: "Jennifer", rating: 10, date: "17 May 2025", title: "Excellent job", content: "I got an excellent job from them. Lovely experience.", location: "BL1", verified: true },
]

export default function ReviewsPage() {
    const [data, setData] = useState<CheckatradeData | null>(null)
    const [userReviews, setUserReviews] = useState<Review[]>([])
    const [loading, setLoading] = useState(true)

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        rating: 10,
        title: '',
        content: '',
        location: ''
    })
    const [submitting, setSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [hoverRating, setHoverRating] = useState(0)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        async function fetchAllReviews() {
            try {
                // Fetch Checkatrade reviews
                const checkatradeResponse = await fetch('/api/reviews')
                if (checkatradeResponse.ok) {
                    const reviewData = await checkatradeResponse.json()
                    setData(reviewData)
                } else {
                    setData({
                        businessName: "Go Cleeny Limited",
                        averageRating: 9.94,
                        totalReviews: fallbackReviews.length,
                        reviews: fallbackReviews,
                        lastUpdated: new Date().toISOString()
                    })
                }

                // Fetch user-submitted reviews
                const userResponse = await fetch('/api/submit-review')
                if (userResponse.ok) {
                    const userData = await userResponse.json()
                    setUserReviews(userData.reviews || [])
                }
            } catch (err) {
                console.error('Error fetching reviews:', err)
                setData({
                    businessName: "Go Cleeny Limited",
                    averageRating: 9.94,
                    totalReviews: fallbackReviews.length,
                    reviews: fallbackReviews,
                    lastUpdated: new Date().toISOString()
                })
            } finally {
                setLoading(false)
            }
        }

        fetchAllReviews()
    }, [])

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        setSubmitError('')
        setSubmitSuccess(false)

        try {
            const response = await fetch('/api/submit-review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitSuccess(true)
                // Add new review to the list immediately
                setUserReviews(prev => [result.review, ...prev])
                // Reset form
                setFormData({ name: '', rating: 10, title: '', content: '', location: '' })
                // Hide success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000)
            } else {
                setSubmitError(result.error || 'Failed to submit review')
            }
        } catch {
            setSubmitError('Failed to submit review. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    // Combine all reviews (user reviews first, then Checkatrade)
    const checkatradeReviews = data?.reviews || fallbackReviews
    const allReviews = [...userReviews, ...checkatradeReviews]
    const averageRating = data?.averageRating || 9.94
    const totalReviews = allReviews.length

    const stats = [
        { icon: Star, value: `${averageRating.toFixed(1)}/10`, label: "Checkatrade Rating" },
        { icon: Heart, value: `${totalReviews}`, label: "Total Reviews" },
        { icon: Award, value: "100%", label: "Satisfaction Rate" },
        { icon: ThumbsUp, value: "15,000+", label: "Jobs Completed" }
    ]

    // Convert 10-point rating to 5 stars
    const ratingToStars = (rating: number) => Math.round((rating / 10) * 5)

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/servicewe.webp"
                        alt="Client Reviews"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/50 z-10" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide mb-4">
                        Real Stories. Verified on Checkatrade.
                    </div>
                    <h1 className="heading-hero font-heading font-bold text-white tracking-tight mb-4 sm:mb-6">
                        Client Reviews
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
                        See what our verified customers say about Go Cleeny on Checkatrade.
                    </p>
                </motion.div>
            </section>

            {/* Checkatrade Badge */}
            <section className="py-6 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-100">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="https://www.checkatrade.com/trades/gocleenylimited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 group"
                        >
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900">Verified on Checkatrade</p>
                                <p className="text-sm text-gray-500">View our full profile</p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </Link>
                        <div className="text-center">
                            <p className="text-sm text-gray-500">Reviews updated automatically</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-7 w-7 text-primary" />
                                </div>
                                <p className="text-3xl md:text-4xl font-bold text-primary font-heading">{stat.value}</p>
                                <p className="text-gray-600 font-medium mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Introduction */}
            <section className="section-padding bg-gray-50">
                <div className="container px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <h2 className="heading-section font-heading font-bold tracking-tight text-gray-900">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Every review below is verified by Checkatrade. We're proud of our {averageRating.toFixed(2)}/10 rating from {totalReviews} happy customers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Write Review Button */}
            <section className="py-6 bg-white border-b border-gray-100">
                <div className="container px-4 md:px-6 text-center">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                    >
                        <MessageSquarePlus className="h-5 w-5" />
                        Write a Review
                    </motion.button>
                </div>
            </section>

            {/* Review Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowForm(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                        >
                            <X className="h-5 w-5 text-gray-500" />
                        </button>

                        {/* Form Header */}
                        <div className="p-6 pb-0">
                            <h2 className="text-xl font-heading font-bold text-gray-900 mb-1">
                                Share Your Experience
                            </h2>
                            <p className="text-sm text-gray-500">
                                We'd love to hear about your cleaning experience!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6">
                            {/* Success Message */}
                            {submitSuccess && (
                                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                                    <p className="text-green-700 text-sm font-medium">Thank you! Your review has been submitted.</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {submitError && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-red-700 text-sm">{submitError}</p>
                                </div>
                            )}

                            {/* Rating Selector */}
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating *</label>
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {[2, 4, 6, 8, 10].map((value) => (
                                            <button
                                                key={value}
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, rating: value }))}
                                                onMouseEnter={() => setHoverRating(value)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                className="p-0.5 transition-transform hover:scale-110"
                                            >
                                                <Star
                                                    className={`h-7 w-7 transition-colors ${(hoverRating || formData.rating) >= value
                                                        ? 'text-orange-400 fill-orange-400'
                                                        : 'text-gray-300'
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <span className="text-base font-semibold text-gray-700 ml-1">{formData.rating}/10</span>
                                </div>
                            </div>

                            {/* Name & Location Row */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                                    <input
                                        type="text"
                                        id="modal-name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        placeholder="John Smith"
                                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="modal-location" className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                                    <input
                                        type="text"
                                        id="modal-location"
                                        value={formData.location}
                                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                        placeholder="Manchester"
                                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="mb-3">
                                <label htmlFor="modal-title" className="block text-sm font-medium text-gray-700 mb-1.5">Review Title</label>
                                <input
                                    type="text"
                                    id="modal-title"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    placeholder="e.g., Excellent service!"
                                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                />
                            </div>

                            {/* Review Content */}
                            <div className="mb-5">
                                <label htmlFor="modal-content" className="block text-sm font-medium text-gray-700 mb-1.5">Your Review *</label>
                                <textarea
                                    id="modal-content"
                                    required
                                    rows={3}
                                    value={formData.content}
                                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                    placeholder="Tell us about your experience..."
                                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Submit Review
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Reviews Carousel */}
            <section className="section-padding bg-white">
                <div className="container px-4 md:px-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                            <p className="text-gray-500">Loading reviews from Checkatrade...</p>
                        </div>
                    ) : (
                        <div className="relative">
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => {
                                    const container = document.getElementById('reviews-carousel');
                                    if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
                                }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors hidden md:flex"
                                aria-label="Previous reviews"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={() => {
                                    const container = document.getElementById('reviews-carousel');
                                    if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
                                }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors hidden md:flex"
                                aria-label="Next reviews"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Scrollable Container */}
                            <div
                                id="reviews-carousel"
                                className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {allReviews.map((review: Review) => (
                                    <div
                                        key={review.id}
                                        className="group bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col min-w-[280px] w-[280px] md:min-w-[300px] md:w-[300px] snap-start shrink-0"
                                    >
                                        {/* Card Header - Reviewer Info */}
                                        <div className="p-5 pb-3">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-1.5">
                                                        <p className="font-semibold text-gray-900 text-sm truncate">{review.name}</p>
                                                        {review.verified && (
                                                            <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                                                        )}
                                                    </div>
                                                    {review.location && (
                                                        <p className="text-xs text-gray-400">{review.location}</p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < ratingToStars(review.rating) ? 'text-orange-400 fill-orange-400' : 'text-gray-200'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Body - Content */}
                                        <div className="px-5 pb-5 flex-1">
                                            {/* Title */}
                                            {review.title && (
                                                <h3 className="font-medium text-gray-800 text-sm mb-2">{review.title}</h3>
                                            )}

                                            {/* Review text */}
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {review.content}
                                            </p>
                                        </div>

                                        {/* Date footer */}
                                        <div className="px-5 pb-4">
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile scroll hint */}
                            <p className="text-center text-sm text-gray-400 mt-4 md:hidden">
                                ← Swipe to see more reviews →
                            </p>
                        </div>
                    )}
                </div>
            </section>


            {/* Trust Badges */}
            <section className="section-padding bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="heading-section font-heading font-bold tracking-tight text-gray-900 mb-4">
                            Why Trust Go Cleeny?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're fully vetted and verified by Checkatrade, with 12 background checks completed.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <Link
                            href="https://www.checkatrade.com/trades/gocleenylimited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <span className="font-bold text-gray-700">{averageRating.toFixed(1)}/10 on Checkatrade</span>
                        </Link>

                        <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="font-bold text-gray-700">12 Vetting Checks Passed</span>
                        </div>

                        <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Award className="h-5 w-5 text-primary" />
                            <span className="font-bold text-gray-700">Member Since April 2025</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding relative overflow-hidden bg-primary">
                <div className="container px-4 md:px-6 text-center relative z-10">
                    <h2 className="heading-section font-heading font-bold mb-6 text-white tracking-tight">
                        Ready to Experience It Yourself?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
                        Join our happy customers and discover the Go Cleeny difference.
                    </p>
                </div>
            </section>
        </main>
    )
}
