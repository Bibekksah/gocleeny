import './globals.css'

import type React from "react"
import type { Metadata } from "next"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Go Cleeny - Eco-Friendly Cleaning Services",
  description: "Professional eco-friendly cleaning services for homes and businesses. Book your cleaning today!",
  generator: 'v0.dev',
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
