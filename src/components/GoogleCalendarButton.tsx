'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import type { GoogleCalendar } from '@/types/google-calendar'

declare global {
  interface Window {
    calendar: GoogleCalendar
    __calendarButtonInitialized?: boolean
  }
}

export default function GoogleCalendarButton() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const initializeButton = async () => {
      if (!mounted) return

      try {
        // Wait for the script to be fully loaded and initialized
        let attempts = 0
        while (!window.calendar?.schedulingButton && attempts < 10) {
          await new Promise(resolve => setTimeout(resolve, 100))
          attempts++
        }

        if (!window.calendar?.schedulingButton) {
          throw new Error('Calendar script failed to load')
        }

        const target = document.getElementById('google-calendar-button')
        if (!target) {
          throw new Error('Target element not found')
        }

        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ30_eM7WHSgwJaE27N-nvqe897igBEFDcARk-Npl-A3Og1vPzqxU7JDYx4kFStYlXXap2SBE5Yg?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target,
        })
        
        if (mounted) {
          setIsLoading(false)
          setError(null)
        }
      } catch (error) {
        console.error('Error initializing Google Calendar button:', error)
        if (mounted) {
          setError(error instanceof Error ? error.message : 'Failed to initialize button')
          setIsLoading(false)
        }
      }
    }

    // Start initialization when component mounts
    initializeButton()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="relative">
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="beforeInteractive"
      />
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      <div id="google-calendar-button">
        {isLoading && (
          <div className="animate-pulse bg-gray-200 h-10 w-48 rounded"></div>
        )}
        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
      </div>
    </div>
  )
} 