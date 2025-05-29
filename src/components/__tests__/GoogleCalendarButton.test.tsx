import { act } from '@testing-library/react'
import { render } from '@/test-utils'
import GoogleCalendarButton from '../GoogleCalendarButton'

// Mock next/script
jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ src }: { src: string }) => <script src={src} />,
}))

// Mock window.calendar
const mockCalendar = {
  schedulingButton: {
    load: jest.fn(),
  },
}

describe('GoogleCalendarButton', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks()
    
    // Setup window.calendar mock
    window.calendar = mockCalendar as any
  })

  it('loads the calendar script', () => {
    render(<GoogleCalendarButton />)
    expect(document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]')).toBeInTheDocument()
  })

  it('loads the calendar stylesheet', () => {
    render(<GoogleCalendarButton />)
    expect(document.querySelector('link[href="https://calendar.google.com/calendar/scheduling-button-script.css"]')).toBeInTheDocument()
  })

  it('initializes the calendar button when script is loaded', async () => {
    render(<GoogleCalendarButton />)
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })
    expect(mockCalendar.schedulingButton.load).toHaveBeenCalledWith({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ30_eM7WHSgwJaE27N-nvqe897igBEFDcARk-Npl-A3Og1vPzqxU7JDYx4kFStYlXXap2SBE5Yg?gv=true',
      color: '#039BE5',
      label: 'Book an appointment',
      target: expect.any(HTMLElement),
    })
  })

  it('shows error state when initialization fails', async () => {
    // Mock calendar not being available
    window.calendar = undefined as any

    const { findByTestId } = render(
      <div data-testid="container">
        <GoogleCalendarButton />
      </div>
    )
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })
    const error = await findByTestId('google-calendar-error')
    expect(error).toBeInTheDocument()
    expect(error.textContent).toContain('Calendar script failed to load')
  })
}) 