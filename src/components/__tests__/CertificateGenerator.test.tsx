import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CertificateGenerator from '../CertificateGenerator'

// Mock pdf-lib
jest.mock('pdf-lib', () => ({
  PDFDocument: {
    create: jest.fn().mockResolvedValue({
      addPage: jest.fn().mockReturnValue({
        drawImage: jest.fn(),
        drawRectangle: jest.fn(),
        drawText: jest.fn(),
        drawCircle: jest.fn(),
        drawLine: jest.fn(),
      }),
      embedFont: jest.fn().mockResolvedValue({
        widthOfTextAtSize: jest.fn().mockReturnValue(100),
      }),
      embedPng: jest.fn().mockResolvedValue({
        scale: jest.fn().mockReturnValue({ width: 100, height: 100 }),
      }),
      save: jest.fn().mockResolvedValue(new Uint8Array([1, 2, 3, 4])),
    }),
    StandardFonts: {
      Helvetica: 'Helvetica',
      HelveticaBold: 'HelveticaBold',
    },
    rgb: jest.fn().mockReturnValue('rgb(0, 0, 0)'),
  },
}))

// Mock fetch for images
global.fetch = jest.fn().mockResolvedValue({
  arrayBuffer: jest.fn().mockResolvedValue(new ArrayBuffer(8)),
})

// Mock URL.createObjectURL and URL.revokeObjectURL
global.URL.createObjectURL = jest.fn().mockReturnValue('blob:test-url')
global.URL.revokeObjectURL = jest.fn()

// Mock document.createElement and related DOM methods
const mockLink = {
  href: '',
  download: '',
  click: jest.fn(),
}
const mockAppendChild = jest.fn()
const mockRemoveChild = jest.fn()

Object.defineProperty(document, 'createElement', {
  value: jest.fn().mockReturnValue(mockLink),
  writable: true,
})

Object.defineProperty(document.body, 'appendChild', {
  value: mockAppendChild,
  writable: true,
})

Object.defineProperty(document.body, 'removeChild', {
  value: mockRemoveChild,
  writable: true,
})

describe('CertificateGenerator', () => {
  const defaultProps = {
    name: 'Test Swimmer',
    instructor: 'Test Instructor',
    date: '2025-01-01',
    notes: 'Great progress!',
    achievements: [
      '🌊 You can go under water',
      '🏊‍♀️ You can float on your back',
      '🛟 You can be safe in the water',
      'You can swim freestyle',
    ],
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the download button', () => {
    render(<CertificateGenerator {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /download certificate/i })).toBeInTheDocument()
  })

  it('shows loading state when generating PDF', async () => {
    render(<CertificateGenerator {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /download certificate/i })
    fireEvent.click(button)
    
    expect(screen.getByText('Generating...')).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('handles achievements with emojis', async () => {
    const achievementsWithEmojis = [
      '🌊 You can go under water',
      '🏊‍♀️ You can float on your back',
      '💨 You can take a quick breath',
    ]
    
    render(<CertificateGenerator {...defaultProps} achievements={achievementsWithEmojis} />)
    
    const button = screen.getByRole('button', { name: /download certificate/i })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Download Certificate')).toBeInTheDocument()
    })
  })

  it('handles achievements without emojis', async () => {
    const achievementsWithoutEmojis = [
      'You can swim freestyle',
      'You can swim breaststroke',
      'You can swim backstroke',
    ]
    
    render(<CertificateGenerator {...defaultProps} achievements={achievementsWithoutEmojis} />)
    
    const button = screen.getByRole('button', { name: /download certificate/i })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Download Certificate')).toBeInTheDocument()
    })
  })

  it('handles mixed achievements with and without emojis', async () => {
    const mixedAchievements = [
      '🌊 You can go under water',
      'You can swim freestyle',
      '💨 You can take a quick breath',
      'You can swim breaststroke',
    ]
    
    render(<CertificateGenerator {...defaultProps} achievements={mixedAchievements} />)
    
    const button = screen.getByRole('button', { name: /download certificate/i })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Download Certificate')).toBeInTheDocument()
    })
  })

  it('handles empty achievements array', async () => {
    render(<CertificateGenerator {...defaultProps} achievements={[]} />)
    
    const button = screen.getByRole('button', { name: /download certificate/i })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Download Certificate')).toBeInTheDocument()
    })
  })

  it('handles special characters in name', async () => {
    render(<CertificateGenerator {...defaultProps} name="José María" />)
    
    const button = screen.getByRole('button', { name: /download certificate/i })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText('Download Certificate')).toBeInTheDocument()
    })
  })
}) 