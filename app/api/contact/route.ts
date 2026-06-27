import { NextRequest, NextResponse } from 'next/server'
// Temporarily disabled for Vercel deployment.
// Restore this Prisma import when database/email functionality is enabled again.
// import { prisma } from '../../../lib/prisma'

// POST /api/contact — save a new inquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, service } = body

    // Basic validation
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Name, phone, email, and service are required.' },
        { status: 400 }
      )
    }

    // Temporarily disabled for Vercel deployment.
    // Restore this Prisma call when database/email functionality is enabled again.
    //
    // const inquiry = await prisma.contactInquiry.create({
    //   data: {
    //     name,
    //     phone,
    //     email,
    //     service,
    //     date: date || null,
    //     message: message || null,
    //   },
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received. Email functionality will be enabled soon.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to save inquiry. Please try again.' },
      { status: 500 }
    )
  }
}

// GET /api/contact — retrieve all inquiries (for admin)
export async function GET() {
  try {
    // Temporarily disabled for Vercel deployment.
    // Restore this Prisma call when database/email functionality is enabled again.
    //
    // const inquiries = await prisma.contactInquiry.findMany({
    //   orderBy: { createdAt: 'desc' },
    // })
    const inquiries: unknown[] = []

    return NextResponse.json({ inquiries })
  } catch (error) {
    console.error('Fetch inquiries error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries.' },
      { status: 500 }
    )
  }
}
