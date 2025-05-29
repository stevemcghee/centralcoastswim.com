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
    expect(getByText('Print Flyer')).toBeInTheDocument()
  })

  it('has the correct CSS classes', () => {
    const { container } = render(<PrintButton />)
    const button = container.querySelector('button')
    expect(button).toHaveClass('no-print', 'fixed', 'top-4', 'right-4', 'bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-blue-600')
  })

  it('calls window.print when clicked', () => {
    const { getByText } = render(<PrintButton />)
    fireEvent.click(getByText('Print Flyer'))
    expect(window.print).toHaveBeenCalled()
  })

  it('adds and removes print styles on mount and unmount', () => {
    const { unmount } = render(<PrintButton />)
    
    // Check if style was added
    const styleElement = document.querySelector('style')
    expect(styleElement).toBeInTheDocument()
    expect(styleElement?.textContent).toContain('@media print')
    
    // Unmount component
    unmount()
    
    // Check if style was removed
    expect(document.querySelector('style')).not.toBeInTheDocument()
  })
}) 