import { NextRequest, NextResponse } from 'next/server'

// Admin credentials — change these to environment variables in production
const ADMIN_EMAIL = 'petchimuthu9555@gmail.com'
const ADMIN_PASSWORD = '12345678'
const SESSION_TOKEN = 'eden_admin_session_ok'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      )
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid email or password.' },
        { status: 401 }
      )
    }

    // Build response with a session cookie
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', SESSION_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
