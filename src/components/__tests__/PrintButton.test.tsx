import { fireEvent } from '@testing-library/react'
import { render } from '@/test-utils'
import PrintButton from '../PrintButton'

describe('PrintButton', () => {
  beforeEach(() => {
    // Mock window.print
    window.print = jest.fn()
  })

  afterEach(() => {
    // Clean up
    jest.restoreAllMocks()
  })

  it('renders the print button with correct text', () => {
    const { getByText } = render(<PrintButton />)
    expect(getByText('Print')).toBeInTheDocument()
  })

  it('has the correct CSS classes', () => {
    const { container } = render(<PrintButton />)
    const button = container.querySelector('button')
    expect(button).toHaveClass('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'no-print')
  })

  it('calls window.print when clicked', () => {
    const { getByText } = render(<PrintButton />)
    fireEvent.click(getByText('Print'))
    expect(window.print).toHaveBeenCalled()
  })

}) 