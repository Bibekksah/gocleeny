"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialItem {
    name: string
    role: string
    content: string
    rating: number
    avatar?: string
}

interface TestimonialsProps {
    title?: string
    description?: string
    items: TestimonialItem[]
}

export function Testimonials({ title = "What People Say", description, items }: TestimonialsProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900 mb-6">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                    <Avatar className="h-12 w-12 border border-gray-100">
                                        <AvatarImage src={item.avatar} alt={item.name} />
                                        <AvatarFallback className="bg-primary/5 text-primary font-bold">
                                            {item.name.split(" ").map((n) => n[0]).join("").substring(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed italic">
                                        &ldquo;{item.content}&rdquo;
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
