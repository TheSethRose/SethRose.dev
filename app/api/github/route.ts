import { NextResponse } from 'next/server'
import { getProjects } from '@/lib/data'

// Cache control constants
const CACHE_MAX_AGE = 60 * 60 // 1 hour in seconds
const STALE_WHILE_REVALIDATE = 60 * 60 * 24 // 24 hours in seconds

export async function GET() {
  try {
    // Fetch projects from GitHub or fallback data
    const projects = await getProjects()

    // Return the projects with cache headers
    return NextResponse.json(
      { projects },
      {
        status: 200,
        headers: {
          'Cache-Control': `public, max-age=${CACHE_MAX_AGE}, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
        },
      }
    )
  } catch (error) {
    console.error('Error in GitHub API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

// Set revalidation interval for the route
export const revalidate = 3600 // 1 hour in seconds
