import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ReactElement } from 'react'

// Extend Jest's expect
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(...classNames: string[]): R
    }
  }
}

// Custom render function that includes providers
const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render } 