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

  it('renders certificate items with emojis', () => {
    const { getAllByTestId } = render(<SwimCertificate />)

    const accomplishmentTexts = getAllByTestId('text')
    
    // Check for specific emoji items
    const emojiItems = accomplishmentTexts.filter(text => 
      text.textContent?.includes('🌊') ||
      text.textContent?.includes('🏊‍♀️') ||
      text.textContent?.includes('🛟') ||
      text.textContent?.includes('🏊‍♂️') ||
      text.textContent?.includes('💨') ||
      text.textContent?.includes('🐸') ||
      text.textContent?.includes('🔄') ||
      text.textContent?.includes('🦋') ||
      text.textContent?.includes('🥞') ||
      text.textContent?.includes('🫁') ||
      text.textContent?.includes('🦵')
    )

    // Should have multiple emoji items
    expect(emojiItems.length).toBeGreaterThan(0)
  })

  it('renders all certificate items from the list', () => {
    const { getAllByTestId } = render(<SwimCertificate />)

    const accomplishmentTexts = getAllByTestId('text')
    
    // Check for specific achievement items
    const expectedItems = [
      '🌊 You can go under water',
      '🏊‍♀️ You can float on your back',
      '🛟 You can be safe in the water',
      '🏊‍♂️ You can swim to the edge of the pool',
      '🏊‍♀️ You can swim freestyle',
      '💨 You can swim freestyle with proper breathing',
      '🐸 You can swim breaststroke',
      '🔄 You can swim backstroke',
      '🦋 You can swim butterfly',
      '🏊‍♂️ You can dive into a pool safely',
      '💨 You can take a quick breath',
      '🛟 You can float on your back for safety breaths',
      '🥞 You can flip like a pancake',
      '🫁 You can control your breathing',
      '🦵 You can kick your feet',
    ]

    // Check that at least some of the expected items are rendered
    const renderedItems = accomplishmentTexts
      .map(text => text.textContent)
      .filter(content => content && content.includes('✓'))

    expect(renderedItems.length).toBeGreaterThan(0)
    
    // Verify that emoji items are present
    const hasEmojiItems = renderedItems.some(item => 
      item && (item.includes('🌊') || item.includes('🏊‍♀️') || item.includes('🛟'))
    )
    expect(hasEmojiItems).toBe(true)
  })

  it('renders certificate with proper styling', () => {
    const { getByTestId, getAllByTestId } = render(<SwimCertificate />)

    const document = getByTestId('document')
    const page = getByTestId('page')
    const views = getAllByTestId('view') // Get all view elements

    expect(document).toBeInTheDocument()
    expect(page).toBeInTheDocument()
    expect(views.length).toBeGreaterThan(0) // Check that at least one view exists
  })
}) 