import { NextResponse } from 'next/server'
import { saveBrandSubmission, getBrandSubmissions } from '@/lib/fileStorage'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const submission = saveBrandSubmission({
      contactName: data.contactName,
      title: data.title,
      email: data.email,
      phone: data.phone,
      brandName: data.brandName,
      websiteUrl: data.websiteUrl,
      countryOfOrigin: data.countryOfOrigin,
      productTypes: data.productTypes || [],
      pricePoint: data.pricePoint,
      numberOfSKUs: parseInt(data.numberOfSKUs, 10),
      sellsVia: data.sellsVia,
      hasMiddleEastPresence: data.hasMiddleEastPresence === 'yes',
      middleEastPresenceDetails: data.middleEastPresenceDetails || null,
      instagramHandle: data.instagramHandle || null,
    })

    return NextResponse.json({
      success: true,
      data: submission,
    })
  } catch (error) {
    console.error('Error saving brand submission:', error)
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
    const submissions = getBrandSubmissions()

    return NextResponse.json({
      success: true,
      data: submissions,
    })
  } catch (error) {
    console.error('Error getting brand submissions:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get submissions',
      },
      { status: 500 }
    )
  }
}
