import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

// POST /api/contact — save a new inquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, service, date, message } = body

    // Basic validation
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Name, phone, email, and service are required.' },
        { status: 400 }
      )
    }

    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        phone,
        email,
        service,
        date: date || null,
        message: message || null,
      },
    })

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully!', inquiry },
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
    const inquiries = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ inquiries })
  } catch (error) {
    console.error('Fetch inquiries error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries.' },
      { status: 500 }
    )
  }
}
