import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1})).toHaveTextContent('Vite + React');
  })
})
