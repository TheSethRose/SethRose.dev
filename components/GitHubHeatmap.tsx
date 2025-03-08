"use client"

import React, { useEffect, useState } from "react"
import { Typography } from "@/components/ui/typography"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchGitHubContributions } from "@/lib/github"

type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type HeatmapProps = {
  username: string
  className?: string
}

export function GitHubHeatmap({ username, className = "" }: HeatmapProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  // Determine intensity level based on contribution count
  const getIntensityLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
    if (count === 0) return 0
    if (count <= 2) return 1
    if (count <= 5) return 2
    if (count <= 10) return 3
    return 4
  }

  // Fetch GitHub contributions when component mounts
  useEffect(() => {
    async function fetchContributions() {
      try {
        setLoading(true)

        // Fetch real GitHub contribution data
        const result = await fetchGitHubContributions(username)

        // Get the total contributions directly from the API
        setTotalContributions(result.totalContributions)

        // Map the data to include intensity levels
        const mappedData = result.contributions.map(item => ({
          date: item.date,
          count: item.count,
          level: getIntensityLevel(item.count)
        }))

        setContributions(mappedData)
      } catch (err) {
        console.error('Error fetching contributions:', err)
        setError('Failed to load contribution data')

        // Generate mock data as fallback
        const mockData = generateMockData()
        setContributions(mockData)
        setTotalContributions(mockData.reduce((sum, item) => sum + item.count, 0))
      } finally {
        setLoading(false)
      }
    }

    // Generate mock data for fallback
    const generateMockData = () => {
      const today = new Date()
      // Start date is 90 days ago from today
      const startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 90)

      const days: ContributionDay[] = []
      const currentDate = new Date(startDate)

      // Generate data for 90 days
      while (currentDate <= today) {
        // Generate random contribution count (more likely to be 0)
        const random = Math.random()
        let count = 0

        if (random > 0.75) count = Math.floor(Math.random() * 3) + 1
        if (random > 0.9) count = Math.floor(Math.random() * 5) + 3
        if (random > 0.97) count = Math.floor(Math.random() * 10) + 8

        days.push({
          date: currentDate.toISOString().split('T')[0],
          count,
          level: getIntensityLevel(count)
        })

        currentDate.setDate(currentDate.getDate() + 1)
      }

      return days
    }

    fetchContributions()
    // This effect should only run when username or refreshKey changes
  }, [username, refreshKey])

  // Function to manually refresh the data
  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1)
  }

  // Calculate the calendar data for rendering
  const calculateCalendarData = () => {
    if (contributions.length === 0) {
      return { weeks: [], totalDays: 0 }
    }

    // Sort contributions by date
    const sortedContributions = [...contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )

    // Get the date range
    const firstDate = new Date(sortedContributions[0].date)
    const lastDate = new Date(sortedContributions[sortedContributions.length - 1].date)

    // Create a map for quick lookup
    const contributionMap = new Map()
    sortedContributions.forEach(item => {
      contributionMap.set(item.date, item)
    })

    // Calculate the first day of the week for the first date
    const firstDayOfWeek = firstDate.getDay()

    // Generate all dates in the range
    const allDates = []
    const currentDate = new Date(firstDate)

    // Add empty cells for days before the first contribution
    for (let i = 0; i < firstDayOfWeek; i++) {
      allDates.push(null)
    }

    // Add all dates in the range
    while (currentDate <= lastDate) {
      const dateString = currentDate.toISOString().split('T')[0]
      const contribution = contributionMap.get(dateString) || {
        date: dateString,
        count: 0,
        level: 0
      }
      allDates.push(contribution)
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // Group into weeks
    const weeks = []
    for (let i = 0; i < allDates.length; i += 7) {
      weeks.push(allDates.slice(i, i + 7))
    }

    return { weeks, totalDays: allDates.length }
  }

  // Get month labels
  const getMonthLabels = () => {
    if (contributions.length === 0) return []

    // For a 90-day period ending in March, we need to show Dec, Jan, Feb, Mar
    return [
      { name: 'Dec', index: 11 },
      { name: 'Jan', index: 0 },
      { name: 'Feb', index: 1 },
      { name: 'Mar', index: 2 }
    ]
  }

  if (isLoading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex justify-between items-center mb-4">
          <Typography as="h3" variant="h4">Contribution Activity</Typography>
          <button
            onClick={handleRefresh}
            className="text-sm text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-400)]"
            disabled={isLoading}
          >
            Refresh
          </button>
        </div>
        <Skeleton className="h-[120px] w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex justify-between items-center mb-4">
          <Typography as="h3" variant="h4">Contribution Activity</Typography>
          <button
            onClick={handleRefresh}
            className="text-sm text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-400)]"
          >
            Refresh
          </button>
        </div>
        <div className="rounded-md p-4 text-center text-[var(--color-neutral-500)]">
          {error}
        </div>
      </div>
    )
  }

  const { weeks } = calculateCalendarData()
  const months = getMonthLabels()

  // GitHub's green color palette for dark mode (adjusted for better visibility)
  const colorPalette = {
    0: '#1a1a1a', // Dark background with better contrast
    1: '#0f5735', // Lightest contribution (brightened)
    2: '#0e8a43', // Light contribution (brightened)
    3: '#30c04e', // Medium contribution (brightened)
    4: '#4aea6a'  // Heavy contribution (brightened)
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-center items-center mb-4">
        <Typography as="h3" variant="h4" className="text-white text-center">
          {totalContributions} contributions in the last 90 days
        </Typography>
      </div>

      <div className="w-full overflow-hidden rounded-md p-5">
        <div className="w-auto" style={{ maxWidth: "fit-content" }}>
          {/* Month labels */}
          <div className="mb-2 flex text-sm text-[var(--color-neutral-500)]">
            <div className="w-[30px]"></div>
            <div className="flex">
              {months.map((month, i) => {
                // Calculate width based on weeks in the month (approximately)
                const weekWidths = [3, 4, 4, 2]; // Approximate weeks per month
                const weekWidth = 20; // Width of each week (15px square + 5px gap)
                return (
                  <div
                    key={i}
                    className="text-start"
                    style={{
                      position: 'relative',
                      height: '24px',
                      width: `${weekWidths[i] * weekWidth}px`
                    }}
                  >
                    {month.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col justify-between pr-2 text-sm text-[var(--color-neutral-500)]">
              <div style={{ height: '15px' }}></div>
              <div>Mon</div>
              <div></div>
              <div>Wed</div>
              <div></div>
              <div>Fri</div>
              <div></div>
            </div>

            {/* Calendar grid */}
            <div className="flex gap-[5px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[5px]">
                  {week.map((day, dayIndex) => (
                    day === null ? (
                      <div
                        key={`empty-${weekIndex}-${dayIndex}`}
                        className="h-[15px] w-[15px]"
                      ></div>
                    ) : (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className="h-[15px] w-[15px] rounded-sm"
                        style={{
                          backgroundColor: colorPalette[day.level as keyof typeof colorPalette],
                          cursor: day.count > 0 ? 'pointer' : 'default'
                        }}
                        title={day.count > 0 ? `${day.count} contributions on ${day.date}` : `No contributions on ${day.date}`}
                      ></div>
                    )
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-end text-sm text-[var(--color-neutral-500)]">
            <span className="mr-2">Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className="ml-[3px] h-[15px] w-[15px] rounded-sm"
                style={{ backgroundColor: colorPalette[level as keyof typeof colorPalette] }}
              ></div>
            ))}
            <span className="ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
