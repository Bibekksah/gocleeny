import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

// Revalidate every hour
export const revalidate = 3600

interface Review {
    id: number
    name: string
    rating: number
    date: string
    content: string
    title: string
    location: string
    verified: boolean
}

interface CheckatradeData {
    businessName: string
    averageRating: number
    totalReviews: number
    reviews: Review[]
    lastUpdated: string
}

// Fallback data in case scraping fails
const fallbackData: CheckatradeData = {
    businessName: "Go Cleeny Limited",
    averageRating: 9.94,
    totalReviews: 11,
    lastUpdated: new Date().toISOString(),
    reviews: [
        { id: 1, name: "Chitta J", rating: 9.67, date: "21 Jan 2026", title: "Reliable service", content: "Bhupan was great. If you need a pair of reliable hand Bhupan is great.", location: "GL2", verified: true },
        { id: 2, name: "Chitta J", rating: 9.67, date: "19 Jan 2026", title: "Easy to work with", content: "Reliable and non demanding easy to work with. Bhupan was nice and trustworthy to work with.", location: "GL2", verified: true },
        { id: 3, name: "Ayo", rating: 10, date: "28 Nov 2025", title: "Dedicated and professional", content: "Very professional, prompt and intentional - highly recommend.", location: "BB12", verified: true },
        { id: 4, name: "Anonymous", rating: 10, date: "24 Nov 2025", title: "Best Cleaning company", content: "Best Cleaning company in the town I've ever had. I highly recommend Go Cleeny as they did an excellent job in a very short notice.", location: "M4", verified: true },
        { id: 5, name: "Anonymous", rating: 10, date: "11 Nov 2025", title: "Great clean", content: "We had a deep clean. Extremely thorough and reasonably priced.", location: "M26", verified: true },
        { id: 6, name: "Kate P", rating: 10, date: "13 Sep 2025", title: "Great cleaners", content: "Arrived promptly and were prepared with various cleaning chemicals. Everything clean and sparkling.", location: "BL6", verified: true },
        { id: 7, name: "Michelle N", rating: 10, date: "20 Aug 2025", title: "Outstanding service", content: "Bickey went out of his way to help me. Extremely polite and reasonable rates.", location: "BL1", verified: true },
        { id: 8, name: "Anonymous", rating: 10, date: "03 June 2025", title: "End of Tenancy-Deep Cleaning", content: "Excellent experience, pleased with service within 24 hours.", location: "M43", verified: true },
        { id: 9, name: "Jennifer", rating: 10, date: "17 May 2025", title: "Excellent job", content: "I got an excellent job from them. Lovely experience.", location: "BL1", verified: true },
        { id: 10, name: "Bhupan", rating: 10, date: "13 May 2025", title: "Best price ever", content: "Excellent service & Best price ever I got. Professional, punctual, and thorough.", location: "PR1", verified: true },
        { id: 11, name: "Kritik", rating: 10, date: "13 May 2025", title: "Reliable and Professional", content: "Go Cleeny Limited has been cleaning our office under a regular contract. Workspace spotless every time.", location: "M4", verified: true },
    ]
}

export async function GET() {
    try {
        const response = await fetch('https://www.checkatrade.com/trades/gocleenylimited', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        })

        if (!response.ok) {
            console.error('Failed to fetch Checkatrade page:', response.status)
            return NextResponse.json(fallbackData)
        }

        const html = await response.text()
        const $ = cheerio.load(html)

        // Try to extract reviews from the page
        const reviews: Review[] = []
        let id = 1

        // Checkatrade uses React with various class names, try multiple selectors
        $('[data-testid="review-card"], [class*="ReviewCard"], [class*="review-card"]').each((_, element) => {
            const $el = $(element)

            const name = $el.find('[class*="author"], [class*="Author"], [class*="name"]').first().text().trim() || 'Anonymous'
            const ratingText = $el.find('[class*="rating"], [class*="Rating"], [class*="score"]').first().text().trim()
            const rating = parseFloat(ratingText) || 10
            const date = $el.find('[class*="date"], [class*="Date"], time').first().text().trim() || ''
            const title = $el.find('[class*="title"], [class*="Title"], h3, h4').first().text().trim() || ''
            const content = $el.find('[class*="content"], [class*="Content"], [class*="text"], p').first().text().trim() || ''
            const location = $el.find('[class*="location"], [class*="Location"]').first().text().trim() || ''

            if (content) {
                reviews.push({
                    id: id++,
                    name,
                    rating,
                    date,
                    title,
                    content,
                    location,
                    verified: true
                })
            }
        })

        // Try alternative selectors if no reviews found
        if (reviews.length === 0) {
            // Look for any review-like content
            $('article, [role="article"]').each((_, element) => {
                const $el = $(element)
                const text = $el.text()
                if (text.includes('/10') || text.includes('review')) {
                    const content = $el.find('p').text().trim()
                    if (content && content.length > 20) {
                        reviews.push({
                            id: id++,
                            name: 'Verified Customer',
                            rating: 10,
                            date: '',
                            title: '',
                            content: content.substring(0, 500),
                            location: '',
                            verified: true
                        })
                    }
                }
            })
        }

        // Extract overall rating
        let averageRating = 9.94
        const ratingMatch = html.match(/(\d+\.?\d*)\s*\/\s*10/)
        if (ratingMatch) {
            averageRating = parseFloat(ratingMatch[1])
        }

        // If scraping succeeded but found no reviews, use fallback
        if (reviews.length === 0) {
            console.log('No reviews found via scraping, using fallback data')
            return NextResponse.json(fallbackData)
        }

        const data: CheckatradeData = {
            businessName: "Go Cleeny Limited",
            averageRating,
            totalReviews: reviews.length,
            reviews,
            lastUpdated: new Date().toISOString()
        }

        return NextResponse.json(data)

    } catch (error) {
        console.error('Error fetching Checkatrade reviews:', error)
        return NextResponse.json(fallbackData)
    }
}
