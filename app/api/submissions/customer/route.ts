import { NextResponse } from 'next/server'
import { saveCustomerSubmission, getCustomerSubmissions } from '@/lib/fileStorage'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const submission = saveCustomerSubmission({
      name: data.name,
      phone: data.phone,
      location: data.location,
      preferences: data.preferences || [],
      priceRange: data.priceRange,
      basketItems: data.basketItems || [],
    })

    return NextResponse.json({
      success: true,
      data: submission,
    })
  } catch (error) {
    console.error('Error saving customer submission:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to save submission',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const submissions = getCustomerSubmissions()

    return NextResponse.json({
      success: true,
      data: submissions,
    })
  } catch (error) {
    console.error('Error getting customer submissions:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get submissions',
      },
      { status: 500 }
    )
  }
}
