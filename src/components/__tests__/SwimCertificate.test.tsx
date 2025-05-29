import { render } from '@testing-library/react'
import { SwimCertificate } from '../SwimCertificate'

// Mock @react-pdf/renderer
jest.mock('@react-pdf/renderer', () => ({
  Document: ({ children }: { children: React.ReactNode }) => <div data-testid="document">{children}</div>,
  Page: ({ children, style }: { children: React.ReactNode; style: any }) => (
    <div data-testid="page" style={style}>
      {children}
    </div>
  ),
  Text: ({ children, style }: { children: React.ReactNode; style: any }) => (
    <div data-testid="text" style={style}>
      {children}
    </div>
  ),
  View: ({ children, style }: { children: React.ReactNode; style: any }) => (
    <div data-testid="view" style={style}>
      {children}
    </div>
  ),
  StyleSheet: {
    create: (styles: any) => styles,
  },
}))

describe('SwimCertificate', () => {
  it('renders the certificate with all required elements', () => {
    const { getByTestId, getAllByTestId } = render(<SwimCertificate />)

    // Check if main components are rendered
    expect(getByTestId('document')).toBeInTheDocument()
    expect(getByTestId('page')).toBeInTheDocument()

    // Check if all accomplishments are rendered
    const accomplishmentTexts = getAllByTestId('text')
    expect(accomplishmentTexts.length).toBeGreaterThan(0)

    // Check if title is rendered
    const titleText = accomplishmentTexts.find(
      (text) => text.textContent === 'Swimming Achievement Certificate'
    )
    expect(titleText).toBeInTheDocument()

    // Check if subtitle is rendered
    const subtitleText = accomplishmentTexts.find(
      (text) => text.textContent === 'Congratulations on your swimming accomplishments!'
    )
    expect(subtitleText).toBeInTheDocument()

    // Check if footer is rendered
    const footerText = accomplishmentTexts.find(
      (text) => text.textContent === 'Central Coast Swim • www.centralcoastswim.com'
    )
    expect(footerText).toBeInTheDocument()
  })
}) 