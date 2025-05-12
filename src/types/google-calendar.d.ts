export interface GoogleCalendar {
  schedulingButton: {
    load: (options: {
      url: string
      color: string
      label: string
      target: HTMLElement | null
    }) => void
  }
}

declare global {
  interface Window {
    calendar: GoogleCalendar
  }
} 