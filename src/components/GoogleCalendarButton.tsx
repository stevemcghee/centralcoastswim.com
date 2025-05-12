'use client'

import { useEffect } from 'react'
import type { GoogleCalendar } from '@/types/google-calendar'

declare global {
  interface Window {
    calendar: GoogleCalendar
  }
}

export default function GoogleCalendarButton() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="scheduling-button-script.js"]')) {
      return
    }

    // Load Google Calendar script
    const script = document.createElement('script')
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js'
    script.async = true
    document.head.appendChild(script)

    // Load Google Calendar styles
    const link = document.createElement('link')
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Initialize the button when the script loads
    script.onload = () => {
      if (window.calendar?.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ30_eM7WHSgwJaE27N-nvqe897igBEFDcARk-Npl-A3Og1vPzqxU7JDYx4kFStYlXXap2SBE5Yg?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: document.getElementById('google-calendar-button'),
        })
      }
    }

    // Don't remove the script and styles on cleanup
    // They should persist for the entire session
  }, [])

  return <div id="google-calendar-button" />
} 