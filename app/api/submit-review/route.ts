import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface UserReview {
    id: number
    name: string
    rating: number
    date: string
    content: string
    title: string
    location: string
    verified: boolean
    source: 'user'
}

// Path to store user reviews
const reviewsFilePath = path.join(process.cwd(), 'data', 'user-reviews.json')

// Ensure directory exists
async function ensureDir() {
    const dir = path.dirname(reviewsFilePath)
    try {
        await fs.access(dir)
    } catch {
        await fs.mkdir(dir, { recursive: true })
    }
}

// Get existing user reviews
async function getUserReviews(): Promise<UserReview[]> {
    try {
        await ensureDir()
        const data = await fs.readFile(reviewsFilePath, 'utf-8')
        return JSON.parse(data)
    } catch {
        return []
    }
}

// Save user reviews
async function saveUserReviews(reviews: UserReview[]) {
    await ensureDir()
    await fs.writeFile(reviewsFilePath, JSON.stringify(reviews, null, 2))
}

// GET - Fetch all user reviews
export async function GET() {
    try {
        const reviews = await getUserReviews()
        return NextResponse.json({ reviews })
    } catch (error) {
        console.error('Error fetching user reviews:', error)
        return NextResponse.json({ reviews: [] })
    }
}

// POST - Add a new review
export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Validate required fields
        const { name, rating, content, title, location } = body

        if (!name || !rating || !content) {
            return NextResponse.json(
                { error: 'Name, rating, and review content are required' },
                { status: 400 }
            )
        }

        if (rating < 1 || rating > 10) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 10' },
                { status: 400 }
            )
        }

        // Get existing reviews
        const reviews = await getUserReviews()

        // Create new review
        const newReview: UserReview = {
            id: Date.now(),
            name: name.trim(),
            rating: Number(rating),
            date: new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }),
            content: content.trim(),
            title: title?.trim() || '',
            location: location?.trim() || '',
            verified: false, // User reviews are not verified
            source: 'user'
        }

        // Add to beginning of array (newest first)
        reviews.unshift(newReview)

        // Save reviews
        await saveUserReviews(reviews)

        return NextResponse.json({
            success: true,
            review: newReview,
            message: 'Review submitted successfully!'
        })

    } catch (error) {
        console.error('Error submitting review:', error)
        return NextResponse.json(
            { error: 'Failed to submit review' },
            { status: 500 }
        )
    }
}
